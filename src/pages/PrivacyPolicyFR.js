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
export default ({ headingText = "Politique de confidentialité" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
          <p>Dernière mise à jour : 30 mai 2022</p>

<p>
  Cette politique de confidentialité décrit nos politiques et procédures sur la collecte, l'utilisation et la divulgation de vos
  informations lorsque vous utilisez le service et vous informe de vos droits à la vie privée et de la manière dont la loi vous protège.
</p>

<p>
  Nous utilisons vos données personnelles pour fournir et améliorer le service. En utilisant le Service, Vous acceptez les
  collecte et utilisation des informations conformément à la présente politique de confidentialité.
</p>

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
<p>Aux fins de la présente politique de confidentialité :</p>
<ul>
  <li>
    <p>
      <strong>Vous</strong> signifie la personne accédant ou utilisant le Service, ou la société, ou autre
      l'entité juridique au nom de laquelle cette personne accède ou utilise le Service, selon le cas.
    </p>
  </li>
  <li>
    <p>
      <strong>Société</strong> (ci-après dénommée « la Société », « Nous », « Notre » ou « Notre » dans le présent Contrat)
      fait référence à Traact.
    </p>
  </li>
  <li>
    <strong>Affilié</strong> désigne une entité qui contrôle, est contrôlée par ou est sous contrôle commun
    avec une partie, où « contrôle » désigne la propriété de 50 % ou plus des actions, des participations ou d'autres
    titres habilités à voter pour l'élection des administrateurs ou d'une autre autorité de gestion.
  </li>
  <li>
    <strong>Compte</strong> désigne un compte unique créé pour vous permettre d'accéder à notre service ou à des parties de notre
    Service.
  </li>
  <li>
    <strong>Site Web</strong> fait référence à Treact, accessible depuis https://treact.com
  </li>{" "}
  <li>
    <strong>Service</strong> fait référence au site Web.
  </li>
  <li>
    <strong>Pays</strong> fait référence à : Maharashtra, Inde
  </li>
  <li>
    <p>
      <strong>Prestataire de services</strong> désigne toute personne physique ou morale qui traite les données pour le compte
      de la compagnie. Il fait référence à des sociétés tierces ou à des personnes employées par la Société pour
      faciliter le Service, fournir le Service au nom de la Société, effectuer des services liés
      au Service ou pour aider la Société à analyser l'utilisation du Service.
    </p>
  </li>
  <li>
    <strong>Service de médias sociaux tiers</strong> désigne tout site Web ou tout site Web de réseau social
    par lequel un Utilisateur peut se connecter ou créer un compte pour utiliser le Service.
  </li>
  <li>
    <p>
      Les <strong>données personnelles</strong> sont toutes les informations relatives à une personne identifiée ou identifiable
      individuel.
    </p>
  </li>
  <li>
    Les <strong>cookies</strong> sont de petits fichiers qui sont placés sur votre ordinateur, appareil mobile ou tout autre
    appareil par un site Web, contenant les détails de votre historique de navigation sur ce site Web parmi ses nombreux
    les usages.
  </li>{" "}
  <li>
    Les <strong>données d'utilisation</strong> font référence aux données collectées automatiquement, soit générées par l'utilisation du
    Service ou de l'infrastructure du Service elle-même (par exemple, la durée d'une visite de page).
  </li>
</ul>

<h1>Collecte et utilisation de vos données personnelles</h1>
            <h2>Types de données collectées</h2>

            <h3>Données personnelles</h3>
            <p>
              Lors de l'utilisation de notre service, nous pouvons vous demander de nous fournir certaines informations personnellement identifiables
              qui peuvent être utilisées pour vous contacter ou vous identifier. Les informations personnellement identifiables peuvent inclure, mais ne sont pas
              limité à:
            </p>
            <ul>
              <li>Adresse e-mail</li> <li>Prénom et nom</li> <li>Numéro de téléphone</li>{" "}
              <li>Adresse, État, Province, Code postal/ZIP, Ville</li> <li>Données d'utilisation</li>
            </ul>

            <h3>Données d'utilisation</h3>
            <p>Les données d'utilisation sont collectées automatiquement lors de l'utilisation du service.</p>
            <p>
              Les données d'utilisation peuvent inclure des informations telles que l'adresse de protocole Internet de votre appareil (par exemple, l'adresse IP),
              le type de navigateur, la version du navigateur, les pages de notre Service que Vous visitez, l'heure et la date de Votre visite,
              le temps passé sur ces pages, les identifiants uniques de l'appareil et d'autres données de diagnostic.
            </p>
            <p>
              Lorsque vous accédez au service par ou via un appareil mobile, nous pouvons collecter certaines informations
              automatiquement, y compris, mais sans s'y limiter, le type d'appareil mobile que vous utilisez, votre appareil mobile unique
              ID, l'adresse IP de Votre appareil mobile, Votre système d'exploitation mobile, le type d'Internet mobile
              navigateur que vous utilisez, des identifiants d'appareil uniques et d'autres données de diagnostic.
            </p>
            <p>
              Nous pouvons également collecter des informations que votre navigateur envoie chaque fois que vous visitez notre service ou lorsque vous accédez à
              le Service par ou via un appareil mobile.
            </p>

            <h3>Technologies de suivi et cookies</h3>
            <p>
              Nous utilisons des cookies et des technologies de suivi similaires pour suivre l'activité sur notre service et stocker certains
              informations. Les technologies de suivi utilisées sont des balises, des balises et des scripts pour collecter et suivre les informations
              et pour améliorer et analyser Notre Service.
            </p>
            <p>
              Vous pouvez demander à Votre navigateur de refuser tous les Cookies ou de vous signaler l'envoi d'un Cookie. Cependant,
              si vous n'acceptez pas les cookies, vous ne pourrez peut-être pas utiliser certaines parties de notre service.
            </p>
            <p>
              Les cookies peuvent être des cookies « persistants » ou « de session ». Les cookies persistants restent sur votre ordinateur personnel ou
              appareil mobile lorsque vous vous déconnectez, tandis que les cookies de session sont supprimés dès que vous fermez votre site Web
              navigateur. En savoir plus sur les cookies : <a href="https://www.termsfeed.com/blog/cookies/">Tout sur les cookies</a>
              .
            </p>
            <p>Nous utilisons à la fois des cookies de session et des cookies persistants aux fins décrites ci-dessous :</p>
            <ul>
              <li>
                <p>
                  <strong>Cookies nécessaires/essentiels</strong>
                </p>
                <p>Type : Cookies de session</p>
                <p>Géré par : Nous</p>
                <p>
                  Objectif : Ces cookies sont essentiels pour vous fournir les services disponibles via le site Web et pour
                  Vous permettre d'utiliser certaines de ses fonctionnalités. Ils aident à authentifier les utilisateurs et à prévenir l'utilisation frauduleuse de
                  comptes utilisateur. Sans ces Cookies, les services que Vous avez demandés ne peuvent être fournis, et Nous
                  utiliser ces cookies uniquement pour vous fournir ces services.
                </p>
              </li>
              <li>
                <p>
                  <strong>Politique relative aux cookies / Avis d'acceptation des cookies</strong>
                </p>
                <p>Type : Cookies persistants</p>
                <p>Géré par : Nous</p>
                <p>Objectif : Ces cookies identifient si les utilisateurs ont accepté l'utilisation de cookies sur le site Web.</p>
              </li>
              <li>
                <p>
                  <strong>Cookies de fonctionnalité</strong>
                </p>
                <p>Type : Cookies persistants</p>
                <p>Géré par : Nous</p>
                <p>
                  Finalité : ces cookies nous permettent de mémoriser les choix que vous faites lorsque vous utilisez le site Web, tels que
                  se souvenir de vos informations de connexion ou de votre préférence de langue. Le but de ces Cookies est de Vous fournir
                  avec une expérience plus personnelle et pour Vous éviter d'avoir à ressaisir vos préférences à chaque fois que Vous
                  utiliser le site Web.
                </p>
              </li>
            </ul>
            <p>
              Pour plus d'informations sur les cookies que nous utilisons et vos choix concernant les cookies, veuillez visiter notre Cookies
              Politique.
            </p>

            <h2>Utilisation de vos données personnelles</h2>
            <p>La Société peut utiliser les Données personnelles aux fins suivantes :</p>
            <ul>
              <li>
                <strong>Pour fournir et maintenir notre Service</strong>, y compris pour surveiller l'utilisation de notre Service.
              </li>
              <li>
                <strong>Pour gérer Votre Compte :</strong> pour gérer Votre inscription en tant qu'utilisateur du Service. La
                Les données personnelles que vous fournissez peuvent vous donner accès à différentes fonctionnalités du service qui sont
                à votre disposition en tant qu'utilisateur enregistré.
              </li>
              <li>
                <strong>Pour l'exécution d'un contrat :</strong> l'élaboration, le respect et l'engagement des
                contrat d'achat pour les produits, articles ou services que vous avez achetés ou de tout autre contrat avec
                Nous par le biais du Service.
              </li>
              <li>
                <strong>Pour vous contacter :</strong> pour vous contacter par e-mail, appels téléphoniques, SMS ou autre équivalent
                formes de communication électronique, telles que les notifications push d'une application mobile concernant les mises à jour
                ou des communications informatives liées aux fonctionnalités, produits ou services sous-traités, y compris
                les mises à jour de sécurité, lorsque cela est nécessaire ou raisonnable pour leur mise en œuvre.
              </li>
              <li>
                <strong>Pour vous fournir</strong> des actualités, des offres spéciales et des informations générales sur d'autres biens,
                les services et événements que nous proposons qui sont similaires à ceux que vous avez déjà achetés ou demandés
                à moins que vous n'ayez choisi de ne pas recevoir ces informations.
              </li>
              <li>
                <strong>Pour gérer vos demandes :</strong> pour assister et gérer vos demandes que vous nous adressez.
              </li>
            </ul>

            <p>Nous pouvons partager vos informations personnelles dans les situations suivantes :</p>

            <ul>
              <li>
                <strong>Avec des fournisseurs de services :</strong> nous pouvons partager vos informations personnelles avec des fournisseurs de services
                pour surveiller et analyser l'utilisation de notre service, pour vous contacter.
              </li>
              <li>
                <strong>Pour les transferts commerciaux :</strong> nous pouvons partager ou transférer vos informations personnelles dans
                dans le cadre de ou pendant les négociations de toute fusion, vente d'actifs de la Société, financement ou
                l'acquisition de tout ou partie de notre activité à une autre société.
              </li>
              <li>
                <strong>Avec des affiliés :</strong> nous pouvons partager vos informations avec nos affiliés, auquel cas nous
                exigera de ces affiliés qu'ils respectent cette politique de confidentialité. Les sociétés affiliées comprennent notre société mère et
                toutes autres filiales, coentreprises ou autres sociétés que nous contrôlons ou qui sont sous
                contrôle commun avec nous.
              </li>
              <li>
              <strong>Avec des partenaires commerciaux :</strong> nous pouvons partager vos informations avec nos partenaires commerciaux pour
                Vous proposer certains produits, services ou promotions.
              </li>
              <li>
                <strong>Avec d'autres utilisateurs :</strong> lorsque vous partagez des informations personnelles ou interagissez autrement dans le
                zones publiques avec d'autres utilisateurs, ces informations peuvent être vues par tous les utilisateurs et peuvent être rendues publiques
                distribué à l'extérieur. Si vous interagissez avec d'autres utilisateurs ou vous enregistrez via un réseau social tiers
                Service, vos contacts sur le service de médias sociaux tiers peuvent voir votre nom, votre profil, vos photos et
                description de votre activité. De même, les autres utilisateurs pourront voir les descriptions de Votre activité,
                communiquer avec vous et consulter votre profil.
              </li>
            </ul>

            <h2>Conservation de vos données personnelles</h2>
            <p>
              La Société ne conservera Vos Données Personnelles que le temps nécessaire aux finalités énoncées dans
              cette politique de confidentialité. Nous conserverons et utiliserons vos données personnelles dans la mesure nécessaire pour nous conformer à nos
              obligations légales (par exemple, si nous sommes tenus de conserver vos données pour nous conformer aux lois applicables),
              résoudre les litiges et appliquer nos accords et politiques juridiques.
            </p>
            <p>
              La Société conservera également les données d'utilisation à des fins d'analyse interne. Les données d'utilisation sont généralement conservées
              pour une durée plus courte, sauf lorsque ces données sont utilisées pour renforcer la sécurité ou pour améliorer la
              fonctionnalité de Notre Service, ou Nous sommes légalement tenus de conserver ces données pendant des périodes plus longues.
            </p>

            <h2>Transfert de vos données personnelles</h2>
            <p>
              Vos informations, y compris les données personnelles, sont traitées dans les bureaux d'exploitation de la société et dans tout
              autres lieux où se trouvent les parties impliquées dans le traitement. Cela signifie que ces informations peuvent
              être transférés et conservés sur des ordinateurs situés en dehors de Votre état, province, pays ou
              autre juridiction gouvernementale où les lois sur la protection des données peuvent différer de celles de Votre
              juridiction.
            </p>
            <p>
              Votre consentement à cette politique de confidentialité suivi de votre soumission de ces informations représente votre
              accord sur ce transfert.
            </p>
            <p>
              La Société prendra toutes les mesures raisonnablement nécessaires pour s'assurer que Vos données sont traitées en toute sécurité et en
              conformément à la présente politique de confidentialité et aucun transfert de vos données personnelles n'aura lieu à un
              organisation ou un pays, sauf si des contrôles adéquats sont en place, y compris la sécurité de vos données
              et autres informations personnelles.
            </p>

            <h2>Divulgation de vos données personnelles</h2>
            <h3>Transactions commerciales</h3>
            <p>
              Si la Société est impliquée dans une fusion, une acquisition ou une vente d'actifs, Vos Données Personnelles peuvent être transférées.
              Nous vous aviserons avant que vos données personnelles ne soient transférées et ne soient soumises à une politique de confidentialité différente.
              Politique.
            </p>
            <h3>Application de la loi</h3>
            <p>
              Dans certaines circonstances, la Société peut être amenée à divulguer Vos Données Personnelles si elle est tenue de le faire.
              conformément à la loi ou en réponse à des demandes valables d'autorités publiques (par exemple, un tribunal ou une agence gouvernementale).
            </p>
            <h3>Autres exigences légales</h3>
            <p>
              La Société peut divulguer vos données personnelles en croyant de bonne foi qu'une telle action est nécessaire pour :
            </p>
            <ul>
              <li>Se conformer à une obligation légale</li>
              <li>Protéger et défendre les droits ou la propriété de la Société</li>
              <li>Prévenir ou enquêter sur d'éventuels actes répréhensibles en rapport avec le Service</li>
              <li>Protéger la sécurité personnelle des Utilisateurs du Service ou du public</li>
              <li>Protection contre la responsabilité légale</li>
            </ul>

            <h2>Sécurité de vos données personnelles</h2>
            <p>
              La sécurité de vos données personnelles est importante pour nous, mais rappelez-vous qu'aucune méthode de transmission sur
              l'Internet, ou méthode de stockage électronique est 100% sécurisé. Alors que nous nous efforçons d'utiliser commercialement
              moyens acceptables pour protéger Vos Données Personnelles, Nous ne pouvons garantir leur sécurité absolue.
            </p>

            <h1>Confidentialité des enfants</h1>
            <p>
              Notre Service ne s'adresse à personne de moins de 13 ans. Nous ne collectons pas sciemment personnellement
              informations identifiables de toute personne de moins de 13 ans. Si vous êtes un parent ou un tuteur et que vous êtes
              sachant que votre enfant nous a fourni des données personnelles, veuillez nous contacter. Si Nous devenons conscients que Nous
              ont collecté des données personnelles auprès de toute personne de moins de 13 ans sans vérification du consentement parental, nous
              prendre des mesures pour supprimer ces informations de nos serveurs.
            </p>
            <p>
              Si nous devons compter sur le consentement comme base juridique pour le traitement de vos informations et que votre pays l'exige
              consentement d'un parent, nous pouvons exiger le consentement de vos parents avant de collecter et d'utiliser ces informations.
            </p>

            <h1>Liens vers d'autres sites Web</h1>
            <p>
              Notre service peut contenir des liens vers d'autres sites Web qui ne sont pas exploités par nous. Si vous cliquez sur un tiers
              lien, vous serez dirigé vers le site de ce tiers. Nous vous conseillons vivement de consulter la politique de confidentialité
              de chaque site que vous visitez.
            </p>
            <p>
              Nous n'avons aucun contrôle sur et n'assumons aucune responsabilité pour le contenu, les politiques de confidentialité ou les pratiques de tout
              sites ou services tiers.
            </p>

            <h1>Modifications de cette politique de confidentialité</h1>
            <p>
              Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant le nouveau
              Politique de confidentialité sur cette page.
            </p>
            <p>
              Nous vous informerons par e-mail et/ou par un avis visible sur notre service, avant que le changement ne devienne
              effective et mettre à jour la date de "Dernière mise à jour" en haut de cette politique de confidentialité.
            </p>
            <p>
              Il vous est conseillé de consulter périodiquement cette politique de confidentialité pour tout changement. Modifications de cette politique de confidentialité
              sont effectifs dès leur publication sur cette page.
            </p>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
