import { Project, User } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// Interface matching the backend response structure
export interface BackendProject {
  id: string;
  name: string;
  description: string;
  hardwareType: string;
  status: string; // 'draft' | 'published'
  isPublic: boolean;
  price: string | null;
  currency: string;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;

  // File URLs (partial list based on actual backend)
  thumbnailUrl: string | null;

  // Joined Author Data
  author: {
    id: string;
    username: string;
    avatarUrl: string | null;
    displayName: string | null;
    walletAddress?: string | null;
  };

  // Stat placeholders
  stars?: number;
  forks?: number;
}

/**
 * Map backend project data to frontend structure
 */
function mapBackendProjectToFrontend(bp: BackendProject): Project {
  // Parse price
  let priceDisplay: number | "Free" = "Free";
  if (bp.price && parseFloat(bp.price) > 0) {
    priceDisplay = parseFloat(bp.price);
  }

  // Generate tags
  const derivedTags = [bp.hardwareType || "Hardware"];
  if (bp.description && bp.description.toLowerCase().includes("iot"))
    derivedTags.push("IoT");
  if (bp.description && bp.description.toLowerCase().includes("esp32"))
    derivedTags.push("ESP32");

  // Map Author to User interface
  const author: User = {
    id: bp.author.id,
    username: bp.author.username || "Anonymous",
    avatarUrl:
      bp.author.avatarUrl ||
      `https://api.dicebear.com/7.x/shapes/svg?seed=${bp.author.username}`,
    isVerified: false, // Default
    reputation: 0, // Default
  };

  return {
    id: bp.id,
    title: bp.name,
    description: bp.description || "",
    imageUrl:
      bp.thumbnailUrl || "https://picsum.photos/seed/pcb_default/800/600",
    author,
    tags: derivedTags,
    specs: [], // Default
    bom: [], // Default
    siliconSeal: false, // Default
    forks: bp.forks || 0,
    stars: bp.stars || 0,
    price: priceDisplay,
    createdAt: bp.createdAt,
    downloads: [], // Default
  };
}

/**
 * Fetch public listings from the marketplace
 */
export async function getProjects(params?: {
  limit?: number;
  offset?: number;
  search?: string;
}): Promise<Project[]> {
  try {
    const query = new URLSearchParams();
    if (params?.limit) query.append("limit", params.limit.toString());
    if (params?.offset) query.append("offset", params.offset.toString());
    if (params?.search) query.append("search", params.search);

    const res = await fetch(
      `${API_URL}/api/market/listings?${query.toString()}`,
    );

    if (!res.ok) {
      console.error("Failed to fetch projects:", res.status, res.statusText);
      return [];
    }

    const data = await res.json();
    const listings: BackendProject[] = data.listings || [];

    return listings.map(mapBackendProjectToFrontend);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

/**
 * Fetch a single project by ID
 */
export async function getProjectById(id: string): Promise<Project | null> {
  try {
    const res = await fetch(`${API_URL}/api/market/listings/${id}`);

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch project ${id}`);
    }

    const data = await res.json();
    const project: BackendProject = data.project;

    return mapBackendProjectToFrontend(project);
  } catch (error) {
    return null;
  }
}

/**
 * Get marketplace statistics
 */
export interface MarketplaceStats {
  modules: number;
  creators: number;
  earned: number;
  downloads: number;
}

export async function getMarketplaceStats(): Promise<MarketplaceStats | null> {
  try {
    const res = await fetch(`${API_URL}/api/market/stats`);
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching stats:", error);
    return null;
  }
}
