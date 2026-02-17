"use client";

import { createContext, useContext, ReactNode } from "react";
import { PrivyProvider, usePrivy, useWallets } from "@privy-io/react-auth";

interface AuthContextType {
  user: any;
  wallet: any;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  walletAddress: string | null;
  getAccessToken: () => Promise<string | null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      config={{
        appearance: {
          theme: "dark",
          accentColor: "#0038df",
          logo: "/logo.svg",
        },
        loginMethods: ["wallet", "email"],
      }}
    >
      <AuthContextProvider>{children}</AuthContextProvider>
    </PrivyProvider>
  );
}

function AuthContextProvider({ children }: { children: ReactNode }) {
  const { user, login, logout, authenticated, ready, getAccessToken } =
    usePrivy();
  const { wallets } = useWallets();

  // Extract Solana wallet address from user's linked accounts
  const solanaWallet = user?.linkedAccounts?.find(
    (account: any) =>
      account.type === "wallet" && account.chainType === "solana",
  );

  const walletAddress = (solanaWallet as any)?.address || null;
  const wallet = solanaWallet || (wallets.length > 0 ? wallets[0] : null);

  // Debug logging
  console.log("🔐 Privy State:", {
    authenticated,
    ready,
    userId: user?.id,
    walletAddress,
    linkedAccountsCount: user?.linkedAccounts?.length || 0,
    linkedAccounts: user?.linkedAccounts?.map((a: any) => ({
      type: a.type,
      chainType: a.chainType,
      address: a.address,
    })),
  });

  const value: AuthContextType = {
    user,
    wallet,
    isAuthenticated: authenticated, // Just check authenticated, not ready
    login,
    logout,
    walletAddress,
    getAccessToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
