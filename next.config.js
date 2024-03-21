/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
   async rewrites() {
    return [
      {
          "source": "/images/AbastecimentoAgua",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FAbastecimentoAgua.jpg?alt=media&token=a287b216-f546-4a53-aebf-b17183b3b0b1"
      },
      {
          "source": "/images/Apicultura",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FApicultura.jpg?alt=media&token=800e29d0-444e-4a6a-a1f9-460113b708cb"
      },
      {
          "source": "/images/Areia",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FAreia.jpg?alt=media&token=2053ca12-e493-4e45-89a2-0f082e3b9db9"
      },
      {
          "source": "/images/BeijaFlor",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FBeijaFlor.jpg?alt=media&token=b84d12c5-ac0c-4cc1-91c7-9fafcd14fbd4"
      },
      {
          "source": "/images/BichoPregui%C3%A7a",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FBichoPregui%C3%A7a.jpg?alt=media&token=65bc2ed1-75df-4aa0-b3a8-9bd762fb32e0"
      },
      {
          "source": "/images/Borboletario",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FBorboletario.jpg?alt=media&token=ab00892d-6603-44e5-b762-45e2a1880952"
      },
      {
          "source": "/images/Botanica",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FBotanica.jpg?alt=media&token=e9d4232a-1e91-4ad6-b8b5-7da9886e8151"
      },
      {
          "source": "/images/BotoCorderosa",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FBotoCorderosa.jpeg?alt=media&token=138ae497-4eb6-46ac-bc81-68ef0f90ba80"
      },
      {
          "source": "/images/Caf%C3%A9",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FCaf%C3%A9.jpg?alt=media&token=919d8b19-6f7b-4ed9-9aa8-1a4e952401f1"
      },
      {
          "source": "/images/Camarao",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FCamarao.jpg?alt=media&token=4a700ab2-d5cc-494d-9799-ed0ef7d0e12e"
      },
      {
          "source": "/images/Cancer",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FCancer.jpg?alt=media&token=b69f2eb3-063c-47e1-9325-1703824d4ac3"
      },
      {
          "source": "/images/Canibalismo",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FCanibalismo.jpg?alt=media&token=a6ba0720-b881-4448-86c3-dc0ece38863a"
      },
      {
          "source": "/images/Canion",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FCanion.jpg?alt=media&token=33b7429b-c65e-4b2a-93b0-68f7522b31a8"
      },
      {
          "source": "/images/Cascata",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FCascata.jpg?alt=media&token=3d063bc9-e99b-4fa0-b19b-592d14b6f7b0"
      },
      {
          "source": "/images/Cavalo",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FCavalo-marinho.jpg?alt=media&token=628d3c7f-a927-42f9-8a4f-f9db8fb85131"
      },
      {
          "source": "/images/Caverna",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FCaverna.jpg?alt=media&token=32eb55eb-6c9f-4f9d-bacb-6cc85edee3ca"
      },
      {
          "source": "/images/Cerejeira",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FCerejeira-do-japao.jpg?alt=media&token=ce0848a5-61bf-49e8-b0da-bf9d7e839a28"
      },
      {
          "source": "/images/Chuva",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FChuva.jpg?alt=media&token=b963b8f2-7865-4ac5-888f-5efbc4930655"
      },
      {
          "source": "/images/Colina",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FColina.jpg?alt=media&token=68a0dd57-8c3e-41eb-905e-bd9ce4c26cd3"
      },
      {
          "source": "/images/CombustivelFossil",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FCombustivelFossil.jpg?alt=media&token=694f7bb9-af6f-4d69-8f40-532885aa425d"
      },
      {
          "source": "/images/Compostagem",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FCompostagem.jpg?alt=media&token=4fe9235c-c280-4a45-9627-f8780144376a"
      },
      {
          "source": "/images/Contaminacao",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FContaminacao.jpg?alt=media&token=8947a0fa-5d84-4a16-bfb7-dc101851c995"
      },
      {
          "source": "/images/Coqueiro",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FCoqueiro.jpg?alt=media&token=f76a09c6-504d-4afe-9da4-2280f801922b"
      },
      {
          "source": "/images/Coruja",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FCoruja.jpg?alt=media&token=bd1ba841-7dfb-4aa0-b729-c9721ceb9e5c"
      },
      {
          "source": "/images/Cratera",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FCratera.jpg?alt=media&token=3e88c190-f29b-42e8-a95b-5ec589cbc61c"
      },
      {
          "source": "/images/Criogenia",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FCriogenia.jpg?alt=media&token=d892d695-b6c2-44e8-a1fc-c18d6a769bc9"
      },
      {
          "source": "/images/Deserto",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FDeserto.jpg?alt=media&token=4f29b735-7fc8-4afb-b88b-08f56688e850"
      },
      {
          "source": "/images/Desmatamento",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FDesmatamento.jpg?alt=media&token=8911ec59-115f-44fd-a60e-b8bf627677b1"
      },
      {
          "source": "/images/Drag%C3%A3oKomodo",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2FDrag%C3%A3oKomodo.jpg?alt=media&token=06052e22-77b1-46b4-acee-eb403ae4065c"
      },
      {
          "source": "/images/abelha",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fabelha.jpg?alt=media&token=abdad6e2-6c21-4221-bc26-19fa22428ce0"
      },
      {
          "source": "/images/aeracao%20do%20solo",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Faeracao%20do%20solo.jpg?alt=media&token=c348d3f5-09ee-45f1-bf93-7c5a1407ddfa"
      },
      {
          "source": "/images/agua%20freatica",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fagua%20freatica.jpg?alt=media&token=c2068c80-5f37-4067-bfa1-57871c9c7208"
      },
      {
          "source": "/images/agua",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fagua.jpg?alt=media&token=77d9f136-f57b-4d23-953f-7b189b2b9a8c"
      },
      {
          "source": "/images/amazonia",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Famazonia.jpg?alt=media&token=1eb8c204-c4ac-4be7-aec3-c3ead3597bf1"
      },
      {
          "source": "/images/bosque",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fbosque.jpg?alt=media&token=ca6fc9a3-447c-4cde-94c6-ba24490f35c9"
      },
      {
          "source": "/images/calotaGlacial",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fcalota%20Polar.jpg?alt=media&token=1f81c55b-b71a-4da4-b808-8e8f63261faa"
      },
      {
          "source": "/images/conama",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fconama.jpg?alt=media&token=18e23908-db22-4c85-ad5b-7556c6c3fd49"
      },
      {
          "source": "/images/ebulicao",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Febulicao.jpg?alt=media&token=14ef3449-d702-4628-af81-56446927bcb3"
      },
      {
          "source": "/images/ecossistema",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fecossistema.jpg?alt=media&token=b17234e2-1866-44e8-8aa4-1af27ff89bed"
      },
      {
          "source": "/images/ecossistemas%20agricolas",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fecossistemas%20agricolas.jpg?alt=media&token=e14be185-04ee-4a65-9151-094072d349f3"
      },
      {
          "source": "/images/ecossistemas%20marinhos",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fecossistemas%20marinhos.jpg?alt=media&token=2a59f412-df43-4e8d-b161-20b9a83686e9"
      },
      {
          "source": "/images/energia%20atomica",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fenergia%20atomica.jpg?alt=media&token=c26938a7-a07a-4b97-8d9c-9c4abab6f366"
      },
      {
          "source": "/images/energia%20eolica",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fenergia%20eolica.jpg?alt=media&token=8eb61066-f28c-4ca5-98ee-223e2cf223ff"
      },
      {
          "source": "/images/energia%20geotermica",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fenergia%20geotermica.jpg?alt=media&token=b40f5d5d-9572-411c-aadc-d9663b7e8852"
      },
      {
          "source": "/images/energia%20hidreletrica",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fenergia%20hidreletrica.jpg?alt=media&token=51dcc565-adad-439b-835d-86b210bba921"
      },
      {
          "source": "/images/energia%20solar",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fenergia%20solar.jpg?alt=media&token=3489a567-10cd-4a42-9439-9efcad0b1092"
      },
      {
          "source": "/images/erosao",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Ferosao.jpg?alt=media&token=a948ad4d-a0e6-4c16-8044-4e6a6b4b6570"
      },
      {
          "source": "/images/erupcao%20vulcanica",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Ferupcao%20vulcanica.jpg?alt=media&token=34786640-a2b3-4541-af55-451682d15e48"
      },
      {
          "source": "/images/escala%20richter",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fescala%20richter.jpg?alt=media&token=e12d58e2-8c33-45bf-b621-c2b5a330cc44"
      },
      {
          "source": "/images/esgoto",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fesgoto.jpg?alt=media&token=1f7cd016-584c-4460-a6ab-f10c46d0c3de"
      },
      {
          "source": "/images/etanol",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fetanol.jpg?alt=media&token=a8c1d623-54e1-4ac9-9eb7-d01777ede186"
      },
      {
          "source": "/images/fauna",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Ffauna.jpg?alt=media&token=c132d165-dbba-4a25-acea-1ad2e8a3958a"
      },
      {
          "source": "/images/fazenda%20de%20pesca",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Ffazenda%20de%20pesca.jpg?alt=media&token=3b8506fd-679d-449a-8e76-58d1b448c6f4"
      },
      {
          "source": "/images/ferro",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fferro.jpg?alt=media&token=8906e3ea-5cbf-42d3-9f96-43930ddab1ab"
      },
      {
          "source": "/images/flor",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fflor.jpg?alt=media&token=2e199022-04c2-4ab4-a8e6-224a6416697c"
      },
      {
          "source": "/images/floracao%20de%20algas",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Ffloracao%20de%20algas.jpg?alt=media&token=d5ea904d-afdc-4841-8026-14e89e13fd09"
      },
      {
          "source": "/images/floresta%20de%20araucarias",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Ffloresta%20de%20araucarias.jpg?alt=media&token=61fdb1de-87f4-4c53-95b2-9f6062ce54fc"
      },
      {
          "source": "/images/floresta",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Ffloresta.jpg?alt=media&token=03f8ac2e-f551-4ecf-855d-631d7105884e"
      },
      {
          "source": "/images/fogo",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Ffogo.jpg?alt=media&token=8a961a48-89de-4941-8e23-3914d821c05b"
      },
      {
          "source": "/images/fosfato",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Ffosfato.jpg?alt=media&token=18293876-d617-4c20-95ff-18219b42c33a"
      },
      {
          "source": "/images/fuma%C3%A7a",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Ffuma%C3%A7a.jpg?alt=media&token=34b83c80-6799-4f7d-86f5-7283306ea29e"
      },
      {
          "source": "/images/f%C3%B3ssil",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Ff%C3%B3ssil.jpg?alt=media&token=f950cf14-8980-4bb2-b8a5-e8bfc3256ddd"
      },
      {
          "source": "/images/galaxia",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fgalaxia.jpg?alt=media&token=99b8da3a-dc8e-4062-ade7-35372994229e"
      },
      {
          "source": "/images/gas",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fgas.jpg?alt=media&token=115aa012-b04a-4bfb-97bd-a2836944abf6"
      },
      {
          "source": "/images/gasolina",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fgasolina.jpg?alt=media&token=4e5cec5d-dc34-4f53-8e27-03fdf36ddf3e"
      },
      {
          "source": "/images/geiser",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fgeiser.jpg?alt=media&token=8b4065e3-97a4-4415-a947-0ab00067cbd5"
      },
      {
          "source": "/images/geleria",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fgeleria.jpg?alt=media&token=b1bc00c1-4828-400d-a565-7a239ea68722"
      },
      {
          "source": "/images/gelo",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fgelo.jpg?alt=media&token=9b558c99-3f03-4754-ad97-ab9ea625be08"
      },
      {
          "source": "/images/geografia",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fgeografia.jpg?alt=media&token=4797828f-137c-4577-bfd2-76b9384a0f47"
      },
      {
          "source": "/images/germinacao",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fgerminacao.jpg?alt=media&token=041a6bbf-0e2e-496a-89e3-463771565909"
      },
      {
          "source": "/images/gravidade",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fgravidade.jpg?alt=media&token=2a2daf77-ca89-4098-9497-88d557b05a7a"
      },
      {
          "source": "/images/hibernacao",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fhibernacao.jpg?alt=media&token=f405f21e-28ce-43f3-92ec-caa0da7dde43"
      },
      {
          "source": "/images/hidreletrica",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fhidreletrica.jpg?alt=media&token=04b5c73e-e99d-4893-bbc8-d10ae9ef2035"
      },
      {
          "source": "/images/hipogeu",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fhipogeu.jpg?alt=media&token=7af72425-ccaf-4276-9dff-39a42d7e64dd"
      },
      {
          "source": "/images/hubble",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fhubble.jpg?alt=media&token=52e7785f-96ae-4d56-b7d9-8e28c3011455"
      },
      {
          "source": "/images/ibama",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fibama.jpg?alt=media&token=98e9acfd-0935-4469-9e13-76f312094523"
      },
      {
          "source": "/images/iceberg",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Ficeberg.png?alt=media&token=c14def9d-0ce1-468f-9c68-73d0997fd5d2"
      },
      {
          "source": "/images/icmbio",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Ficmbio.jpg?alt=media&token=6f0d026c-5e92-4dfd-9e08-a3d44e44a989"
      },
      {
          "source": "/images/ilha",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Filha.jpg?alt=media&token=700ba0ec-a261-4b61-ba0e-7607b3834c60"
      },
      {
          "source": "/images/incinerador",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fincinerador.jpg?alt=media&token=c1fa9ec7-69b6-464b-a93e-61985882b8dc"
      },
      {
          "source": "/images/indigena",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Findigena.jpg?alt=media&token=359d852b-43c7-41d8-aef0-3674e31e79ac"
      },
      {
          "source": "/images/inmetro",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Finmetro.jpg?alt=media&token=371a5604-707d-470a-a0e8-b5c249677bdc"
      },
      {
          "source": "/images/inundacao",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Finundacao.jpg?alt=media&token=0fa78209-5361-4c98-a94f-5e768d6f2357"
      },
      {
          "source": "/images/inverno",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Finverno.jpg?alt=media&token=80cc61c4-dd4f-4252-b79b-5c1320694d37"
      },
      {
          "source": "/images/javali",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fjavali.png?alt=media&token=ea5d4e62-a80b-4ea3-9660-f88f69d7ce8c"
      },
      {
          "source": "/images/krill",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fkrill.jpg?alt=media&token=a9f05ef5-461d-405f-9f3b-ab95ffe3a581"
      },
      {
          "source": "/images/lava",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Flava.png?alt=media&token=2521fbed-f458-4fd0-a944-c2c7faac3511"
      },
      {
          "source": "/images/lenha",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Flenha.png?alt=media&token=ea522e5f-2fb6-4862-8421-03b7a54117e0"
      },
      {
          "source": "/images/lixao",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Flixao.png?alt=media&token=6e91bd8b-0a1e-416c-954c-2e3e76b0d5f7"
      },
      {
          "source": "/images/looping",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Flooping.jpg?alt=media&token=6555fa06-b978-4fdd-b8c3-6b8409b4c41e"
      },
      {
          "source": "/images/luz-ultravioleta",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fluz%20ultravioleta.jpg?alt=media&token=92c286e5-8163-4eb9-84cc-8c7d051521d4"
      },
      {
          "source": "/images/luz",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fluz.jpg?alt=media&token=7accc8eb-298c-4cf9-93cd-f0ef4975e675"
      },
      {
          "source": "/images/magma",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fmagma.jpg?alt=media&token=233558f3-f95b-4a6e-a35e-55e77afeb468"
      },
      {
          "source": "/images/malation",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fmalation.jpg?alt=media&token=45d81ccd-2933-406a-81ee-ebebaf64dfb1"
      },
      {
          "source": "/images/mamiferos",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fmamiferos.jpg?alt=media&token=e4daa6c0-821f-4317-8123-6986a1683c27"
      },
      {
          "source": "/images/manchapetroleo",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fmancha%20petroleo.jpg?alt=media&token=ad9124be-f94f-4c46-9bf7-5739beef756a"
      },
      {
          "source": "/images/mar",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fmar.jpg?alt=media&token=6316eac7-d566-4584-8884-4c54898beada"
      },
      {
          "source": "/images/marina",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fmarina.jpg?alt=media&token=4efeed31-369c-4e94-b881-7d23ccf82b37"
      },
      {
          "source": "/images/microbio",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fmicrobio.jpg?alt=media&token=881c836b-5f7e-4420-b04f-4c06e158c164"
      },
      {
          "source": "/images/mina",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fmina.jpg?alt=media&token=b2fdd7ee-c81e-4e3b-986f-f1625dd230b6"
      },
      {
          "source": "/images/mineracao",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fmineracao.jpg?alt=media&token=66c8eda5-b89d-429a-960d-f1854a775402"
      },
      {
          "source": "/images/minerio",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fminerio.jpg?alt=media&token=cee8db5a-ae7e-4495-bcb7-86e1c2405cad"
      },
      {
          "source": "/images/minhoca",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fminhoca.jpg?alt=media&token=eff18a13-ced1-48d9-b14a-e4562c70b91c"
      },
      {
          "source": "/images/motanha",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fmotanha.jpg?alt=media&token=c2598b3a-efbd-4b8e-9977-dc8d47dbbd36"
      },
      {
          "source": "/images/motoserra",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fmotoserra.jpg?alt=media&token=bf2de44c-e10d-4608-90e8-f6e87078fb8e"
      },
      {
          "source": "/images/neblina",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fneblina.jpg?alt=media&token=e26a1544-08d2-4f1f-aab4-8d38f83207b8"
      },
      {
          "source": "/images/neve",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fneve.jpg?alt=media&token=5fcd85dd-e45b-4fb5-975c-062187777007"
      },
      {
          "source": "/images/nuvem",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fnuvem.jpg?alt=media&token=ca4d05e4-4a71-4a29-8995-ea5f7a29b5b2"
      },
      {
          "source": "/images/oleo",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Foleo.jpg?alt=media&token=83484381-3a94-4b49-88a3-6c655957f492"
      },
      {
          "source": "/images/ondas",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fondas.jpg?alt=media&token=ca281177-fce6-49df-ba1c-1a407b3de098"
      },
      {
          "source": "/images/orvalho",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Forvalho.jpg?alt=media&token=40d2dfdc-cc80-428f-9be9-3b59ed43f890"
      },
      {
          "source": "/images/outono",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Foutono.jpg?alt=media&token=01578206-de5e-45e2-9f0b-172fdfec638d"
      },
      {
          "source": "/images/pais",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fpais.jpg?alt=media&token=ae0ff538-73aa-473d-96a9-025413b14a92"
      },
      {
          "source": "/images/paisagem",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fpaisagem.jpg?alt=media&token=e3430fbe-eafc-4925-b1f9-ebf092f09853"
      },
      {
          "source": "/images/pantano",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fpantano.jpg?alt=media&token=090c82eb-43d0-4122-99c3-34e8405b43ab"
      },
      {
          "source": "/images/papel",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fpapel.jpg?alt=media&token=3ddc8605-a2db-46a9-b30f-f1602dd3ddfb"
      },
      {
          "source": "/images/pasto",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fpasto.jpg?alt=media&token=49c84201-1f97-4b93-ab53-49581750a334"
      },
      {
          "source": "/images/pesca",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fpesca.jpg?alt=media&token=9b3e2caf-f608-4b49-ba2d-1c1286574b63"
      },
      {
          "source": "/images/orla",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fpexels-florencia-potter-351283.jpg?alt=media&token=a07bd2c9-f2a4-496b-95de-93050e234238"
      },
      {
          "source": "/images/planeta",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fplaneta.jpg?alt=media&token=80d26020-78fa-4139-9345-baf9e9e19354"
      },
      {
          "source": "/images/planta-aquatica",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fplanta%20aquatica.jpg?alt=media&token=facbc320-34a7-4e06-9fcf-cb131d7bbb6a"
      },
      {
          "source": "/images/planta-carnivora",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fplanta%20carnivora.jpg?alt=media&token=66d40625-967f-4a8b-b303-64bc91f90e79"
      },
      {
          "source": "/images/plastico",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fplastico.jpg?alt=media&token=dacb7a5c-5eba-4629-8d91-65a750fd494a"
      },
      {
          "source": "/images/poeira",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fpoeira.jpg?alt=media&token=feb13a18-9e45-488b-a40c-998695c80785"
      },
      {
          "source": "/images/poluicao-das-aguas",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fpoluicao%20das%20aguas.jpg?alt=media&token=deb14554-8e43-4058-9e34-562e20c5d748"
      },
      {
          "source": "/images/poluicao",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fpoluicao.jpg?alt=media&token=dbc6143b-4867-4c38-9cb6-5d56af264ffc"
      },
      {
          "source": "/images/predador",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fpredador.jpg?alt=media&token=37b7e63d-43f2-4a11-91a3-23b1aae47ea3"
      },
      {
          "source": "/images/primavera",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fprimavera.jpg?alt=media&token=348c2025-c004-49da-b233-770d8a4740c1"
      },
      {
          "source": "/images/quimica",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fquimica.jpg?alt=media&token=10d01a00-1f07-473e-8bf8-88aebbb02b66"
      },
      {
          "source": "/images/raio",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fraio.jpg?alt=media&token=3cce266e-d244-4488-974f-5851cd426ae1"
      },
      {
          "source": "/images/reator-nuclear",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Freator%20nuclear.jpg?alt=media&token=21015ec6-00e6-42e5-9d4a-acba8cd6135f"
      },
      {
          "source": "/images/reciclagem",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Freciclagem.jpg?alt=media&token=adcfbbc1-12f9-4469-99fc-a4db85002c27"
      },
      {
          "source": "/images/recife",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Frecife.jpg?alt=media&token=b1d512d0-1d84-4645-a6c3-7d50cf79f303"
      },
      {
          "source": "/images/reflorestamento",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Freflorestamento.jpg?alt=media&token=707484e7-724e-4d27-9cec-afa66d468c45"
      },
      {
          "source": "/images/reproducao",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Freproducao.jpg?alt=media&token=dbc989cd-cfb4-4bf2-852a-977a452fc889"
      },
      {
          "source": "/images/resina",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fresina.jpg?alt=media&token=38b0d810-c9b5-4164-96f7-739600db9745"
      },
      {
          "source": "/images/rocha",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Frocha.jpg?alt=media&token=970dfff1-bc5b-4a20-84c5-72bc7064dbfa"
      },
      {
          "source": "/images/seca",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fseca.jpg?alt=media&token=e64e09bc-408e-4950-98dd-26dd34458cb8"
      },
      {
          "source": "/images/selvagem",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fselvagem.jpg?alt=media&token=8843cb45-3851-4d7b-a6db-84cbebb2ff4b"
      },
      {
          "source": "/images/semente",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fsemente.jpg?alt=media&token=116dae7c-15c3-4cfd-9feb-44804be38346"
      },
      {
          "source": "/images/sistemasolar",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fsistemasolar.jpg?alt=media&token=53cf5621-5db6-4f9c-80d2-67b1dd90ad11"
      },
      {
          "source": "/images/sodio",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fsodio.jpg?alt=media&token=4ff62047-852b-4cbe-b989-61d8661680e9"
      },
      {
          "source": "/images/sol",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fsol.jpg?alt=media&token=768261f1-8ac5-435c-93ec-525b2bf2e1dd"
      },
      {
          "source": "/images/solo",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fsolo.jpg?alt=media&token=1b9de294-a8c4-42a2-b1e7-5edfefe327dc"
      },
      {
          "source": "/images/sucata",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fsucata.jpg?alt=media&token=c4228f62-e0ad-48b4-833f-dbf306a053a9"
      },
      {
          "source": "/images/tecido",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Ftecido.jpg?alt=media&token=7b4bf3d4-cd6f-4ae9-bf5d-0985f48bca07"
      },
      {
          "source": "/images/termometro",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Ftermometro.jpg?alt=media&token=8b7e10aa-a896-424d-b751-1fa63596481a"
      },
      {
          "source": "/images/tornado",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Ftornado.jpg?alt=media&token=ff249b46-ed4c-4e57-b579-33ee3de1a989"
      },
      {
          "source": "/images/tsunami",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Ftsunami.jpg?alt=media&token=4b694dab-15ad-4c1e-ba84-7d408c152b32"
      },
      {
          "source": "/images/unesco",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Funesco.jpg?alt=media&token=e2cacbed-143c-4447-8219-a36967ce8394"
      },
      {
          "source": "/images/vacinacao",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fvacinacao.jpg?alt=media&token=978e54c5-49a3-4215-a5bc-4718cbf4b23e"
      },
      {
          "source": "/images/veneno",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fveneno.jpg?alt=media&token=e53e1f7c-c2b9-4cb0-8abb-c5f63500c88f"
      },
      {
          "source": "/images/verao",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fverao.jpg?alt=media&token=543a7359-1cd6-4b02-8b48-8868bd9213fa"
      },
      {
          "source": "/images/virus",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fvirus.jpg?alt=media&token=8c89f9ae-c7f1-4bb9-b15a-7669df6f0ae5"
      },
      {
          "source": "/images/viveiro",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fviveiro.jpg?alt=media&token=1d91f5db-0f24-4f0f-9505-0eca703e4fe2"
      },
      {
          "source": "/images/vulcao",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fvulcao.jpg?alt=media&token=a3c6dbed-721a-4f86-a8af-4efe86e0e4ec"
      },
      {
          "source": "/images/zoo",
          "destination": "https://firebasestorage.googleapis.com/v0/b/natureatoz-5286d.appspot.com/o/images%2Fzoo.jpg?alt=media&token=b3390d72-c82b-4419-a87d-632789620a41"
      }
  ]
  },
  images: {
    domains: [
      "cdn.dribbble.com",
      "images.pexels.com",
      "i.imgur.com",
      "imgur.com",
    ],
  },
  env: {
    PUBLIC_MONGODB_URI: process.env.PUBLIC_MONGODB_URI,
    USER_MONGODB_URI: process.env.USER_MONGODB_URI,
    PASSWORD_MONGODB_URI: process.env.PASSWORD_MONGODB_URI,
    KEY_TO_POST: process.env.KEY_TO_POST,
    SEND_API_KEY: process.env.SEND_API_KEY,
    JWT_KEY: process.env.JWT_KEY,
    TOKEN_CONFIGS: process.env.TOKEN_CONFIGS,
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
    URI_PROD: process.env.URI_PROD,
    URI_DEV: process.env.URI_DEV,
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
