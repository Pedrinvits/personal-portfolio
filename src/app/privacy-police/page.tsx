'use client';

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ShieldCheck, Cookie, FileText, Mail, Link as LinkIcon, Database, Lock } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const lastUpdated = "17 de agosto de 2025";

  const sections = [
    { id: "introducao", label: "1. Introdução" },
    { id: "dados-que-coletamos", label: "2. Dados que coletamos" },
    { id: "como-usamos", label: "3. Como usamos os dados" },
    { id: "compartilhamento", label: "4. Compartilhamento com terceiros" },
    { id: "cookies", label: "5. Cookies e tecnologias similares" },
    { id: "base-legal", label: "6. Base legal (LGPD/GDPR)" },
    { id: "retencao", label: "7. Retenção e descarte" },
    { id: "direitos", label: "8. Seus direitos (LGPD)" },
    { id: "seguranca", label: "9. Segurança da informação" },
    { id: "criancas", label: "10. Crianças e adolescentes" },
    { id: "transferencias", label: "11. Transferências internacionais" },
    { id: "terceiros-sdks", label: "12. Integrações e SDKs de terceiros" },
    { id: "contato", label: "13. Contato do Encarregado (DPO)" },
    { id: "mudancas", label: "14. Mudanças nesta política" },
    { id: "glossario", label: "15. Glossário rápido" },
  ];

  return (
    <main className="flex min-h-fit flex-col items-center justify-between p-6 sm:p-10">
      {/* Top bar */}
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <Button asChild className="bg-card hover:bg-card shadow-md">
          <Link href="/">
            <span className="text-xs font-normal text-foreground flex items-center justify-center gap-2 hover:text-slate-500">
              <ChevronLeft size={15} /> Voltar
            </span>
          </Link>
        </Button>
        <ModeToggle />
      </div>

      <div className="mx-auto mt-6 grid w-full max-w-6xl grid-cols-1 gap-6 lg:grid-cols-12">
        {/* TOC */}
        <aside className="lg:col-span-4 lg:sticky lg:top-6 h-fit">
          <Card className="border-dashed">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <FileText className="h-5 w-5" />
                Índice desta página
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              {sections.map((s) => (
                <Link
                  key={s.id}
                  href={`#${s.id}`}
                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition"
                >
                  {s.label}
                </Link>
              ))}
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Resumo rápido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Compromisso com privacidade por padrão.
              </div>
              <div className="flex items-center gap-2">
                <Database className="h-4 w-4" />
                Coletamos o mínimo necessário para operar a plataforma.
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Criptografia em repouso e em trânsito.
              </div>
              <Separator />
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">LGPD-ready</Badge>
                <Badge variant="secondary">OAuth / Tokens seguros</Badge>
                <Badge variant="secondary">Controle de cookies</Badge>
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Content */}
        <section className="lg:col-span-8 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between gap-4">
                <CardTitle className="text-2xl">Política de Privacidade</CardTitle>
                <Badge variant="outline">Última atualização: {lastUpdated}</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              Esta Política descreve como coletamos, usamos e protegemos suas informações ao usar nossa plataforma
              de agendamento e publicação em redes sociais (Instagram e Facebook), inbox unificada e analytics.
              Ao utilizar o serviço, você concorda com os termos abaixo.
            </CardContent>
          </Card>

          <Card id="introducao">
            <CardHeader>
              <CardTitle>1. Introdução</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>
                Esta Política aplica-se a todos os usuários da plataforma. Caso discorde de algum ponto,
                recomendamos não utilizar nossos serviços.
              </p>
              <p>
                Para facilitar a leitura, usamos um <em>glossário</em> ao final com termos como “Dados Pessoais”,
                “Controlador” e “Operador”.
              </p>
            </CardContent>
          </Card>

          <Card id="dados-que-coletamos">
            <CardHeader>
              <CardTitle>2. Dados que coletamos</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Conta e perfil:</strong> nome, email, foto (se login social), fuso horário e preferências.
                </li>
                <li>
                  <strong>Integrações de redes sociais:</strong> IDs de contas/páginas, tokens OAuth (armazenados de forma cifrada),
                  permissões concedidas, datas de expiração.
                </li>
                <li>
                  <strong>Conteúdo de postagens:</strong> legendas, mídias (armazenadas em provedores como S3/MinIO) e metadados.
                </li>
                <li>
                  <strong>Métricas e logs:</strong> status de agendamento/publicação, métricas básicas dos posts,
                  endereços IP e registros técnicos para segurança e auditoria.
                </li>
                <li>
                  <strong>Cookies e similares:</strong> preferências de sessão, autenticação e analytics (ver seção 5).
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card id="como-usamos">
            <CardHeader>
              <CardTitle>3. Como usamos os dados</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-2">
                <li>Operar o agendamento e a publicação automática nos horários definidos por você.</li>
                <li>Manter sua sessão e personalizar a experiência (tema, idioma, fuso).</li>
                <li>Exibir analytics básicos de desempenho das postagens.</li>
                <li>Garantir segurança, prevenção a fraudes e integridade da conta.</li>
                <li>Cumprir obrigações legais, inclusive respostas a solicitações de autoridades.</li>
              </ul>
            </CardContent>
          </Card>

          <Card id="compartilhamento">
            <CardHeader>
              <CardTitle>4. Compartilhamento com terceiros</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                Compartilhamos dados somente com provedores essenciais (hospedagem, armazenamento, mensageria,
                monitoramento) e com as próprias APIs das redes sociais (Meta/Instagram/Facebook) para executar
                as ações que você solicita (ex.: publicar um post).
              </p>
              <p>Exigimos acordos de tratamento de dados e práticas de segurança adequadas desses provedores.</p>
            </CardContent>
          </Card>

          <Card id="cookies">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="h-5 w-5" /> 5. Cookies e tecnologias similares
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Usamos cookies para:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Estritamente necessários:</strong> autenticação e segurança.</li>
                <li><strong>Funcionais:</strong> lembrar preferências (tema, fuso).</li>
                <li><strong>Analytics:</strong> entender uso do produto e melhorar a experiência.</li>
              </ul>
              <p>
                Você pode gerenciar preferências no banner de cookies (quando exibido) ou pelo navegador.
              </p>
            </CardContent>
          </Card>

          <Card id="base-legal">
            <CardHeader>
              <CardTitle>6. Base legal (LGPD/GDPR)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Execução de contrato:</strong> para prestar o serviço contratado.</li>
                <li><strong>Legítimo interesse:</strong> segurança, prevenção a fraudes e melhoria do produto.</li>
                <li><strong>Consentimento:</strong> quando exigido (ex.: certos cookies ou comunicações não-operacionais).</li>
                <li><strong>Cumprimento legal:</strong> obrigações fiscais, regulatórias e ordens de autoridade.</li>
              </ul>
            </CardContent>
          </Card>

          <Card id="retencao">
            <CardHeader>
              <CardTitle>7. Retenção e descarte</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Mantemos dados pelo tempo necessário para cumprir as finalidades desta Política e obrigações legais.
              Tokens de acesso expiram e podem ser revogados a qualquer momento. Mediante solicitação, apagamos
              seus dados conforme prazos legais e limitações técnicas.
            </CardContent>
          </Card>

          <Card id="direitos">
            <CardHeader>
              <CardTitle>8. Seus direitos (LGPD)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Você pode exercer, entre outros, os seguintes direitos:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Confirmação de tratamento e acesso aos dados.</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.</li>
                <li>Portabilidade a outro fornecedor, mediante requisição.</li>
                <li>Informações sobre compartilhamento e consequências do consentimento.</li>
                <li>Revogação do consentimento, quando aplicável.</li>
              </ul>
              <p>Para solicitar, veja a seção “Contato do Encarregado (DPO)”.</p>
            </CardContent>
          </Card>

          <Card id="seguranca">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" /> 9. Segurança da informação
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-2">
                <li>Criptografia em trânsito (HTTPS/TLS) e em repouso para segredos e tokens.</li>
                <li>Controle de acesso baseado em papéis e princípio do menor privilégio.</li>
                <li>Registro e auditoria de eventos críticos (login, publicações, integrações).</li>
                <li>Backups regulares e plano de recuperação de desastres.</li>
              </ul>
            </CardContent>
          </Card>

          <Card id="criancas">
            <CardHeader>
              <CardTitle>10. Crianças e adolescentes</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Nossos serviços não se destinam a menores de 13 anos. Se tomarmos conhecimento de tratamento indevido,
              removeremos as informações conforme a lei aplicável.
            </CardContent>
          </Card>

          <Card id="transferencias">
            <CardHeader>
              <CardTitle>11. Transferências internacionais</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Podemos armazenar e processar dados em provedores localizados fora do seu país. Nesses casos,
              adotamos salvaguardas adequadas (cláusulas contratuais padrão e avaliações de risco).
            </CardContent>
          </Card>

          <Card id="terceiros-sdks">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5" /> 12. Integrações e SDKs de terceiros
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                Integramos com APIs como Meta (Instagram/Facebook) para executar as ações que você solicita.
                O uso dessas APIs é regido também pelas políticas dos próprios provedores.
              </p>
              <p>
                Recomendamos revisar as políticas de privacidade dos terceiros com os quais você opta por conectar sua conta.
              </p>
            </CardContent>
          </Card>

          <Card id="contato">
            <CardHeader>
              <CardTitle>13. Contato do Encarregado (DPO)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Para solicitações relativas a privacidade e proteção de dados,
              entre em contato pelo e-mail{" "}
              <a href="mailto:privacidade@suaempresa.com" className="underline underline-offset-4 hover:text-foreground">
                privacidade@suaempresa.com
              </a>.
            </CardContent>
          </Card>

          <Card id="mudancas">
            <CardHeader>
              <CardTitle>14. Mudanças nesta política</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Podemos atualizar esta Política periodicamente. Publicaremos a versão revisada com a nova data de
              “Última atualização”. Mudanças relevantes podem ser comunicadas por e-mail ou dentro do produto.
            </CardContent>
          </Card>

          <Card id="glossario">
            <CardHeader>
              <CardTitle>15. Glossário rápido</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p><strong>Dados Pessoais:</strong> informações que identificam ou podem identificar uma pessoa.</p>
              <p><strong>Controlador:</strong> quem decide sobre as finalidades e meios de tratamento de dados.</p>
              <p><strong>Operador:</strong> quem realiza o tratamento em nome do Controlador.</p>
              <p><strong>Tratamento:</strong> toda operação com dados (coleta, uso, armazenamento, exclusão etc.).</p>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between py-6 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} Sua Empresa — Todos os direitos reservados.</span>
            <span className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              <a href="mailto:privacidade@suaempresa.com" className="hover:underline">privacidade@suaempresa.com</a>
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
