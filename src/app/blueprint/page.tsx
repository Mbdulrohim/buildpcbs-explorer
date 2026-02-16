import type { Metadata } from "next";
import { ArrowRight, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "BuildPCBs Pivot Blueprint | BuildPCBs.com",
  description:
    "Discover how BuildPCBs is transforming from a circuit design tool into a conversational hardware execution system with decentralized manufacturing.",
  openGraph: {
    title: "BuildPCBs Pivot Blueprint",
    description:
      "From helping engineers to enabling everyone. The story of BuildPCBs' strategic pivot to conversational hardware creation.",
    url: "https://buildpcbs.com/blueprint",
    siteName: "BuildPCBs.com",
    images: [
      {
        url: "/og-image.png?v=2",
        width: 1200,
        height: 630,
        alt: "BuildPCBs Pivot Blueprint",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildPCBs Pivot Blueprint",
    description:
      "From helping engineers to enabling everyone. The story of BuildPCBs' strategic pivot.",
    images: ["/og-image.png?v=2"],
  },
  alternates: {
    canonical: "https://buildpcbs.com/blueprint",
  },
};

const BlueprintPage = () => {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0038DF]/5 via-transparent to-[#255CFF]/5 dark:from-[#0038DF]/10 dark:to-[#255CFF]/10"></div>

        {/* Animated Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #0038DF 1px, transparent 1px),
                           linear-gradient(to bottom, #0038DF 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[#0038DF]/10 dark:bg-[#0038DF]/20 border border-[#0038DF]/20 dark:border-[#0038DF]/30">
            <span className="text-sm font-medium text-[#0038DF] dark:text-[#255CFF]">
              Strategic Vision
            </span>
          </div>

          <h1 className="text-[48px] sm:text-[56px] lg:text-[72px] font-bold text-[#444444] dark:text-white leading-[1.1] tracking-tight mb-6">
            BuildPCBs Pivot
            <br />
            <span className="bg-gradient-to-r from-[#0038DF] to-[#255CFF] bg-clip-text text-transparent">
              Blueprint
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From helping engineers to enabling everyone. The story of how we're
            transforming hardware creation.
          </p>

          <div className="mt-8 animate-bounce">
            <ChevronDown className="w-6 h-6 mx-auto text-[#0038DF] dark:text-[#255CFF]" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Introduction */}
        <section className="mb-16">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            When we started BuildPCBs, the goal was straightforward.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            We wanted to help hardware engineers design circuits faster and with
            less friction. Anyone who has worked with electronics knows how
            fragmented the process is. Schematic design lives in one tool. PCB
            layout in another. BOM management somewhere else. Manufacturing is
            often a completely separate world.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            At the beginning, we believed that if we could make circuit design
            easier and faster for engineers, that alone would be enough.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            But as we built, tested ideas, and spoke to people, something became
            very clear.
          </p>

          <div className="my-12 p-8 rounded-2xl bg-gradient-to-br from-[#0038DF]/5 to-[#255CFF]/5 dark:from-[#0038DF]/10 dark:to-[#255CFF]/10 border border-[#0038DF]/10 dark:border-[#0038DF]/20">
            <p className="text-xl sm:text-2xl font-medium text-[#444444] dark:text-white leading-relaxed">
              The real problem was not just speed.
              <br />
              <span className="text-[#0038DF] dark:text-[#255CFF]">
                The real problem was access.
              </span>
            </p>
          </div>
        </section>

        {/* Section 1 */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#444444] dark:text-white mb-8 tracking-tight">
            From Helping Engineers to Enabling Everyone
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Hardware creation has always been gated. You need the right
            software, the right skills, access to manufacturers, and often the
            ability to physically move components and products across long
            distances. Even for experienced engineers, this process is slow and
            expensive. For non-engineers, it is almost impossible.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            At the same time, AI has changed how people interact with
            technology. Today, people expect to describe what they want in plain
            text and see real outcomes. Software already works this way.
            Hardware does not.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            That gap is what forced the pivot.
          </p>

          <div className="my-8 pl-6 border-l-4 border-[#0038DF] dark:border-[#255CFF]">
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
              We realized that BuildPCBs should not just be a tool for
              engineers.
              <br />
              It should be a system that allows anyone to think of a hardware
              idea, generate it, and have it built.
            </p>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Not someday. Not theoretically.{" "}
            <span className="font-semibold text-[#0038DF] dark:text-[#255CFF]">
              Practically.
            </span>
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#444444] dark:text-white mb-8 tracking-tight">
            The New Idea: Hardware as a Conversation
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            After the pivot, BuildPCBs is no longer just an AI assistant that
            suggests circuits.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            <span className="font-semibold text-[#0038DF] dark:text-[#255CFF]">
              It is a hardware execution system.
            </span>
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            A user should be able to chat with BuildPCBs, describe what they
            want, and have the system take care of the rest. This includes
            generating the circuit, creating the PCB, preparing manufacturing
            files, and routing the job to someone who can physically build it.
          </p>

          <div className="my-10 p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg">
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
              The interaction model is simple:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#0038DF] dark:text-[#255CFF] mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  You talk to the system.
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-[#0038DF] dark:text-[#255CFF] mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  The system does the work.
                </span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Behind the scenes, this involves AI, EDA tooling, manufacturing
            logic, and verification. But for the user, it feels like a
            conversation.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#444444] dark:text-white mb-8 tracking-tight">
            Why Web3 and a Decentralized Network Matter
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            One of the biggest bottlenecks in hardware is logistics. Shipping
            goods across regions is expensive and slow. Trust between builders
            and customers is also a challenge. Centralized manufacturing creates
            long queues and single points of failure.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            This is where the Web3 layer comes in.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Instead of relying on a single manufacturer, BuildPCBs uses a
            decentralized network of builders and fabricators. People who own
            CNC machines, PCB fabrication tools, or assembly equipment can
            participate in the network.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            To do so, they stake the BuildPCBs token. The amount they stake
            defines the maximum value of projects they are allowed to process.
            This creates accountability and reduces risk. If a node fails to
            deliver, there are economic consequences.
          </p>

          <div className="my-10 p-8 rounded-2xl bg-gradient-to-br from-[#0038DF]/5 to-transparent dark:from-[#0038DF]/10 border-l-4 border-[#0038DF] dark:border-[#255CFF]">
            <ul className="space-y-3">
              <li className="text-lg text-gray-800 dark:text-gray-200">
                <span className="font-semibold text-[#0038DF] dark:text-[#255CFF]">
                  Jobs are routed
                </span>{" "}
                based on location, capability, and stake size.
              </li>
              <li className="text-lg text-gray-800 dark:text-gray-200">
                This{" "}
                <span className="font-semibold">
                  reduces shipping distance, lowers cost, and speeds up
                  delivery.
                </span>
              </li>
              <li className="text-lg text-gray-800 dark:text-gray-200">
                Every build, update, and delivery is{" "}
                <span className="font-semibold">tracked transparently</span> on
                the network.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#444444] dark:text-white mb-8 tracking-tight">
            A Closed Creation Ecosystem by Design
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            One important decision we made during the pivot is that only
            hardware created within BuildPCBs can be manufactured or sold on the
            platform.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            This is intentional.
          </p>

          <div className="my-8 grid gap-4 sm:grid-cols-2">
            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <p className="font-semibold text-[#0038DF] dark:text-[#255CFF] mb-2">
                We ensure design compatibility
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <p className="font-semibold text-[#0038DF] dark:text-[#255CFF] mb-2">
                We reduce IP and ownership disputes
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <p className="font-semibold text-[#0038DF] dark:text-[#255CFF] mb-2">
                We make manufacturing predictable
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <p className="font-semibold text-[#0038DF] dark:text-[#255CFF] mb-2">
                We maintain quality standards
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Users can generate designs with AI or manually refine them using our
            EDA tools, which run on our servers. The user sees a lightweight
            interface, while the heavy computation happens in the cloud.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            This approach allows beginners and professionals to coexist in the
            same system.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#444444] dark:text-white mb-8 tracking-tight">
            Marketplace and Ownership
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Once a device is created, the user can choose what to do with it.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            They can:
          </p>

          <ul className="space-y-3 mb-6 ml-6">
            <li className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
              <span className="w-2 h-2 rounded-full bg-[#0038DF] dark:bg-[#255CFF] mt-2.5 mr-3 flex-shrink-0"></span>
              Keep it private
            </li>
            <li className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
              <span className="w-2 h-2 rounded-full bg-[#0038DF] dark:bg-[#255CFF] mt-2.5 mr-3 flex-shrink-0"></span>
              Manufacture it for themselves
            </li>
            <li className="text-lg text-gray-700 dark:text-gray-300 flex items-start">
              <span className="w-2 h-2 rounded-full bg-[#0038DF] dark:bg-[#255CFF] mt-2.5 mr-3 flex-shrink-0"></span>
              List it on the marketplace
            </li>
          </ul>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Other users can order that device directly without needing to
            understand the underlying electronics. In this way, hardware starts
            behaving more like software products or digital assets, except they
            result in real physical objects.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Ownership, versions, and build history are all tracked.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#444444] dark:text-white mb-8 tracking-tight">
            Distribution and Early Adoption
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            To bootstrap the ecosystem, we are planning aggressive user
            acquisition strategies. One example is a community giveaway model
            where a fixed pool of funds is distributed weekly to early users.
            These incentives help creators experiment, publish designs, and
            attract manufacturers to the network.
          </p>

          <div className="my-8 p-8 rounded-2xl bg-gradient-to-br from-[#0038DF]/5 to-[#255CFF]/5 dark:from-[#0038DF]/10 dark:to-[#255CFF]/10 border border-[#0038DF]/10 dark:border-[#0038DF]/20">
            <p className="text-xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed mb-3">
              The goal at this stage is not optimization.
            </p>
            <p className="text-xl font-semibold text-[#0038DF] dark:text-[#255CFF] leading-relaxed">
              The goal is usage, feedback, and real-world stress testing.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#444444] dark:text-white mb-8 tracking-tight">
            What BuildPCBs Is Becoming
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            After the pivot, BuildPCBs is no longer just a circuit design tool.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            It is:
          </p>

          <div className="space-y-4 mb-8">
            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border-l-4 border-[#0038DF] dark:border-[#255CFF] shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                A hardware compiler
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border-l-4 border-[#0038DF] dark:border-[#255CFF] shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                A decentralized manufacturing network
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border-l-4 border-[#0038DF] dark:border-[#255CFF] shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                A marketplace for physical products
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border-l-4 border-[#0038DF] dark:border-[#255CFF] shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                A conversational interface for real-world execution
              </p>
            </div>
          </div>

          <p className="text-xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
            In short, we are turning hardware into something you can chat with
            and ship.
          </p>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-[#0038DF] to-[#255CFF] text-white">
            <p className="text-lg leading-relaxed mb-4">
              This blueprint is not the final word. It is a living document.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              As we build, test, and fail, it will evolve.
            </p>
            <p className="text-lg font-medium leading-relaxed mb-4">
              But the direction is clear.
            </p>
            <p className="text-2xl sm:text-3xl font-bold leading-tight">
              Hardware should be as programmable, accessible, and global as
              software.
              <br />
              BuildPCBs is our attempt to make that real.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center pt-8">
          <a
            href=""
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#0038DF] to-[#255CFF] rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Join the Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </section>
      </article>
    </div>
  );
};

export default BlueprintPage;
