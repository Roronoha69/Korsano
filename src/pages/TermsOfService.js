import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import { SectionHeading } from "components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;

export default ({ headingText = "Conditions Générales d'Utilisation" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>

          <p>Dernière mise à jour : 30 mai 2022</p>

<p>Veuillez lire attentivement ces termes et conditions avant d'utiliser Notre Service.</p>

<h1>Interprétation et définitions</h1>
<h2>Interprétation</h2>
<p>
  Les mots dont la lettre initiale est en majuscule ont des significations définies dans les conditions suivantes.
</p>
<p>
  Les définitions suivantes auront le même sens qu'elles apparaissent au singulier ou au
  pluriel.
</p>

<h2>Définitions</h2>
<p>Aux fins des présentes conditions générales :</p>
<ul>
  <li>
    <strong>Affilié</strong> désigne une entité qui contrôle, est contrôlée par ou est sous contrôle commun
    avec une partie, où « contrôle » désigne la propriété de 50 % ou plus des actions, des participations ou d'autres
    titres habilités à voter pour l'élection des administrateurs ou d'une autre autorité de gestion.
  </li>
  <li>
    <strong>Société</strong> (ci-après dénommée « la Société », « Nous », « Notre » ou « Notre » dans le présent Contrat)
    fait référence à Treact Inc., Navi Mumbai.
  </li>
  <li>
    <strong>Pays</strong> fait référence à : Maharashtra, Inde
  </li>
  <li>
    <strong>Service</strong> fait référence au site Web.
  </li>
  <li>
    <strong>Conditions générales</strong> (également appelées "Conditions") désignent les présentes Conditions générales qui
    constituent l'intégralité de l'accord entre vous et la Société concernant l'utilisation du Service.
  </li>
  <li>
    <strong>Service de médias sociaux tiers</strong> désigne tout service ou contenu (y compris les données,
    informations, produits ou services) fournis par un tiers qui peuvent être affichés, inclus ou rendus
    disponible par le Service.
  </li>
  <li>
    <strong>Site Web</strong> fait référence à Treact, accessible depuis https://treact.com
  </li>
  <li>
    <strong>Vous</strong> désigne la personne accédant ou utilisant le Service, ou la société, ou tout autre
    l'entité au nom de laquelle cette personne accède ou utilise le Service, selon le cas.
  </li>
</ul>

<h1>Reconnaissance</h1>
<p>
  Ce sont les termes et conditions régissant l'utilisation de ce service et l'accord qui fonctionne
  entre vous et la Société. Les présentes conditions générales définissent les droits et obligations de tous les utilisateurs
  concernant l'utilisation du Service.
</p>
<p>
  Votre accès et votre utilisation du Service sont conditionnés par Votre acceptation et votre respect des présentes Conditions.
  et Conditions. Ces Termes et Conditions s'appliquent à tous les visiteurs, utilisateurs et autres qui accèdent ou utilisent le
  Service.
</p>
<p>
  En accédant ou en utilisant le Service, vous acceptez d'être lié par ces Termes et Conditions. Si vous n'êtes pas d'accord
  avec toute partie de ces Termes et Conditions, Vous ne pouvez pas accéder au Service.
</p>
<p>
  Vous déclarez que vous avez plus de 18 ans. La Société n'autorise pas les moins de 18 ans à utiliser le
  Service.
</p>
<p>
  Votre accès et votre utilisation du Service sont également conditionnés par Votre acceptation et votre respect des
  Politique de confidentialité de la Société. Notre politique de confidentialité décrit nos politiques et procédures sur la collecte,
  l'utilisation et la divulgation de vos informations personnelles lorsque vous utilisez l'application ou le site Web et vous indique
  sur vos droits à la vie privée et sur la manière dont la loi vous protège. Veuillez lire attentivement notre politique de confidentialité avant
  en utilisant Notre Service.
</p>



<h1>Liens vers d'autres sites Web</h1>
            <p>
              Notre service peut contenir des liens vers des sites Web tiers ou des services qui ne sont pas détenus ou contrôlés par le
              Compagnie.
            </p>
            <p>
              La Société n'a aucun contrôle sur, et n'assume aucune responsabilité pour, le contenu, les politiques de confidentialité, ou
              pratiques de tout site Web ou service tiers. Vous reconnaissez et acceptez en outre que la Société
              ne sera pas responsable, directement ou indirectement, de tout dommage ou perte causé ou présumé être
              causés par ou en relation avec l'utilisation ou le recours à ces contenus, biens ou services disponibles sur
              ou par l'intermédiaire de ces sites Web ou services.
            </p>
            <p>
              Nous vous conseillons vivement de lire les termes et conditions et les politiques de confidentialité de tout site Web tiers
              ou services que vous visitez.
            </p>

            <h1>Résiliation</h1>
            <p>
              Nous pouvons résilier ou suspendre votre accès immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit
              que ce soit, y compris, sans s'y limiter, si vous enfreignez les présentes conditions générales.
            </p>
            <p>En cas de résiliation, Votre droit d'utiliser le Service cessera immédiatement.</p>

            <h1>Limitation de responsabilité</h1>
            <p>
              Nonobstant les dommages que Vous pourriez subir, l'entière responsabilité de la Société et de l'un de ses
              fournisseurs en vertu de toute disposition des présentes conditions et votre recours exclusif pour tout ce qui précède sera
              limité au montant effectivement payé par vous via le service ou 100 USD si vous n'avez pas acheté
              quoi que ce soit via le Service.
            </p>
            <p>
              Dans la mesure maximale permise par la loi applicable, en aucun cas la Société ou ses fournisseurs ne seront
              responsable de tout dommage spécial, accessoire, indirect ou consécutif (y compris, mais non
              limité à, des dommages-intérêts pour manque à gagner, perte de données ou d'autres informations, pour interruption d'activité, pour
              blessure corporelle, perte de vie privée résultant de ou liée de quelque manière que ce soit à l'utilisation ou à l'impossibilité d'utiliser
              le Service, les logiciels tiers et/ou le matériel tiers utilisés avec le Service, ou autrement dans
              relation avec toute disposition des présentes Conditions), même si la Société ou tout fournisseur a été informé de la
              possibilité de tels dommages et même si le recours n'atteint pas son objectif essentiel.
            </p>
            <p>
              Certains états n'autorisent pas l'exclusion des garanties implicites ou la limitation de responsabilité pour les dommages accessoires ou
              dommages indirects, ce qui signifie que certaines des limitations ci-dessus peuvent ne pas s'appliquer. Dans ces états, chaque
              la responsabilité de la partie sera limitée dans toute la mesure permise par la loi.
            </p>

            <h1>Avis de non-responsabilité "TEL QUEL" et "TEL QUE DISPONIBLE"</h1>
            <p>
              Le service vous est fourni "TEL QUEL" et "TEL QUE DISPONIBLE" et avec tous les défauts et défauts sans garantie
              de toute nature. Dans toute la mesure permise par la loi applicable, la Société, en son propre nom et au
              au nom de ses Affiliés et de leurs concédants de licence et fournisseurs de services respectifs, décline expressément
              toutes les garanties, expresses, implicites, statutaires ou autres, concernant le Service, y compris
              toutes les garanties implicites de qualité marchande, d'adéquation à un usage particulier, de titre et de non-contrefaçon,
              et les garanties pouvant découler du cours des transactions, des performances, de l'utilisation ou des pratiques commerciales.
              Sans limitation à ce qui précède, la Société ne fournit aucune garantie ou engagement, et ne fait aucun
              représentation de quelque nature que ce soit que le Service répondra à Vos exigences, atteindra les résultats escomptés, sera
              compatible ou fonctionne avec tout autre logiciel, application, système ou service, fonctionne sans
              interruption, répondre à toutes les normes de performance ou de fiabilité ou être sans erreur ou que des erreurs ou des défauts
              peut ou sera corrigé.
            </p>
            <p>
              Sans limiter ce qui précède, ni la Société ni aucun de ses fournisseurs ne fait aucun
              représentation ou garantie de quelque nature que ce soit, expresse ou tacite : (i) quant au fonctionnement ou à la disponibilité du
              Service, ou les informations, le contenu et les matériaux ou produits qui y sont inclus ; (ii) que le Service
              sera ininterrompu ou sans erreur ; (iii) quant à l'exactitude, la fiabilité ou l'actualité de toute information
              ou du contenu fourni via le Service ; ou (iv) que le Service, ses serveurs, le contenu ou les e-mails
              envoyés par ou au nom de la Société sont exempts de virus, scripts, chevaux de Troie, vers, logiciels malveillants,
              bombes à retardement ou autres composants nocifs.
            </p>
            <p>
              Certaines juridictions n'autorisent pas l'exclusion de certains types de garanties ou de limitations sur les
              droits statutaires d'un consommateur, de sorte que certaines ou toutes les exclusions et limitations ci-dessus peuvent ne pas s'appliquer à
              Tu. Mais dans un tel cas, les exclusions et limitations énoncées dans la présente section s'appliqueront au
              dans la mesure du possible exécutoire en vertu de la loi applicable.
            </p>

            <h1>Loi applicable</h1>
            <p>
              Les lois du pays, à l'exclusion de ses règles de conflits de lois, régiront les présentes conditions et votre utilisation du
              Service. Votre utilisation de l'Application peut également être soumise à d'autres réglementations locales, étatiques, nationales ou internationales.
              lois.
            </p>

            <h1>Résolution des litiges</h1>
            <p>
              Si vous avez des préoccupations ou un différend concernant le service, vous acceptez d'abord d'essayer de résoudre le différend
              de manière informelle en contactant la Société.
            </p>

            <h1>Pour les utilisateurs de l'Union européenne (UE)</h1>
            <p>
              Si vous êtes un consommateur de l'Union européenne, vous bénéficierez de toutes les dispositions impératives de la loi du
              pays dans lequel vous résidez.
            </p>

            <h1>Conformité légale aux États-Unis</h1>
            <p>
              Vous déclarez et garantissez que (i) vous n'êtes pas situé dans un pays soumis aux États-Unis
              embargo gouvernemental, ou qui a été désigné par le gouvernement des États-Unis comme un « terroriste
              pays de soutien », et (ii) Vous ne figurez sur aucune liste du gouvernement des États-Unis des pays interdits ou
              parties restreintes.
            </p>

            <h1>Divisibilité et renonciation</h1>
            <h2>Divisibilité</h2>
            <p>
              Si une disposition de ces Conditions est jugée inapplicable ou invalide, cette disposition sera modifiée et
              interprétée pour atteindre les objectifs de cette disposition dans toute la mesure du possible en vertu de
              loi applicable et les dispositions restantes resteront en vigueur et de plein effet.
            </p>

            <h2>Renonciation</h2>
            <p>
              Sauf disposition contraire des présentes, le défaut d'exercer un droit ou d'exiger l'exécution d'une obligation
              en vertu des présentes conditions n'affectera pas la capacité d'une partie à exercer ce droit ou à exiger une telle exécution à
              à tout moment par la suite et la renonciation à un manquement ne constituera pas non plus une renonciation à tout manquement ultérieur.
            </p>

            <h1>Traduction Interprétation</h1>
            <p>
              Ces Termes et Conditions peuvent avoir été traduits si Nous les avons mis à Votre disposition sur notre Service.
            </p>
            <p>Vous acceptez que le texte original en anglais prévaut en cas de litige.</p>

            <h1>Modifications de ces conditions générales</h1>
            <p>
              Nous nous réservons le droit, à Notre seule discrétion, de modifier ou de remplacer ces Conditions à tout moment. Si une révision
              est important Nous ferons des efforts raisonnables pour fournir un préavis d'au moins 30 jours avant toute nouvelle condition
              prenant effet. Ce qui constitue un changement important sera déterminé à Notre seule discrétion.
            </p>
            <p>
              En continuant à accéder ou à utiliser Notre Service après l'entrée en vigueur de ces révisions, Vous acceptez d'être lié
              par les termes révisés. Si vous n'acceptez pas les nouvelles conditions, en tout ou en partie, veuillez cesser d'utiliser le
              site Web et le Service.
            </p>

            <h1>Contactez-nous</h1>
            <p>Si vous avez des questions sur ces conditions générales, vous pouvez nous contacter :</p>

            <ul>
              <li>Par e-mail : support@example.com</li>
              <li>Par numéro de téléphone : 408.996.1010</li>
            </ul>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
