import Link from "next/link";
import { clients } from "@/config/clients";
import { Heading } from "@/ui/Heading";
import { Text } from "@/ui/Text";
import type { SupportedLang } from "@/lib/i18n";

const chipClass =
  "flex min-h-[3rem] items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-[13px] font-medium leading-snug text-slate-800 shadow-sm transition-shadow hover:shadow-md sm:text-sm";

type ClientsPageContentProps = {
  lang: SupportedLang;
};

export function ClientsPageContent({ lang }: ClientsPageContentProps) {
  const basePath = lang === "pt" ? "/pt" : "/en";
  const homeTrainings = `${basePath}#trainings`;

  const accreditationClients = clients.filter((c) => c.category === "accreditation");
  const serviceClients = clients.filter((c) => c.category === "services");
  const trainingClients = clients.filter((c) => c.category === "training");

  const title =
    lang === "pt"
      ? "Organizações que confiam na CTLI"
      : "Organizations that trust CTLI";

  const intro =
    lang === "pt"
      ? "Laboratórios em processo ou com acreditação ISO/IEC 17025, parceiros de prestação de serviço e equipes que realizaram treinamentos corporativos com a CTLI."
      : "Laboratories pursuing or holding ISO/IEC 17025 accreditation, service partners and teams that have taken corporate training with CTLI.";

  const hAcc =
    lang === "pt"
      ? "Laboratórios — acreditação ISO/IEC 17025:2017"
      : "Laboratories — ISO/IEC 17025:2017 accreditation";

  const hSvc =
    lang === "pt"
      ? "Prestação de serviços e consultoria"
      : "Service delivery and consulting";

  const hTrain =
    lang === "pt"
      ? "Treinamentos corporativos"
      : "Corporate training";

  return (
    <div>
      <div className="border-b border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <nav className="mb-6 text-sm text-slate-500">
            <Link href={basePath} className="text-primary hover:underline">
              {lang === "pt" ? "Início" : "Home"}
            </Link>
            <span className="mx-2 text-slate-300">/</span>
            <span className="text-slate-700">
              {lang === "pt" ? "Clientes" : "Clients"}
            </span>
          </nav>
          <Heading level={1} className="max-w-3xl text-balance">
            {title}
          </Heading>
          <Text className="mt-4 max-w-2xl text-base text-slate-600">{intro}</Text>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section aria-labelledby="clients-acc">
          <h2
            id="clients-acc"
            className="mb-6 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl"
          >
            {hAcc}
          </h2>
          <p className="mb-6 max-w-2xl text-sm text-slate-600">
            {lang === "pt"
              ? "Balanças, massas e metrologia com foco em conformidade na RBC e requisitos CGCRE/INMETRO."
              : "Balances, mass metrology and RBC compliance with CGCRE/INMETRO requirements."}
          </p>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {accreditationClients.map((client) => (
              <li key={client.id} className={chipClass}>
                {client.label[lang]}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="clients-svc" className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2
              id="clients-svc"
              className="mb-4 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl"
            >
              {hSvc}
            </h2>
            <p className="mb-6 text-sm text-slate-600">
              {lang === "pt"
                ? "Apoio em calibração, pesagem industrial e soluções técnicas."
                : "Support in calibration, industrial weighing and technical solutions."}
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {serviceClients.map((client) => (
                <li key={client.id} className={chipClass}>
                  {client.label[lang]}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2
              id="clients-train"
              className="mb-4 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl"
            >
              {hTrain}
            </h2>
            <p className="mb-6 text-sm text-slate-600">
              {lang === "pt"
                ? "Turmas in company e capacitação em normas, metrologia e qualidade."
                : "In-company cohorts and training on standards, metrology and quality."}
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {trainingClients.map((client) => (
                <li key={client.id} className={chipClass}>
                  {client.label[lang]}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <p className="text-center text-sm text-slate-600">
          <Link
            href={homeTrainings}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {lang === "pt"
              ? "Ver treinamentos e trilhas"
              : "View trainings and tracks"}
          </Link>
          {" · "}
          <Link
            href={`${basePath}#contact`}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {lang === "pt" ? "Contato" : "Contact"}
          </Link>
        </p>
      </div>
    </div>
  );
}

