import { Outstatic } from "outstatic";
import { OstClient } from "outstatic/client";

type PageProps = {
  params: Promise<{
    ost?: string[];
  }>;
};

export default async function OutstaticPage({ params }: PageProps) {
  const [ostParams, ostData] = await Promise.all([params, Outstatic()]);

  return (
    <OstClient
      ostData={ostData}
      params={{ ost: ostParams.ost ?? [] }}
    />
  );
}