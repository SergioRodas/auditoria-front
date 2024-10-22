import Televisa from "../assets/logos/TelevisaTvLogo.tsx";
import MilenioTv from "../assets/logos/MilenioTelevisionLogo.tsx";
import ElFinancieroLogo from "../assets/logos/ElFinancieroLogo.tsx";
import Latinus from "../assets/logos/LatinusLogo.tsx";
import HeraldoTvLogo from "../assets/logos/HeraldoTvLogo.tsx";
import TvAztecaLogo from "../assets/logos/TvAztecaLogo.tsx";
import RadioFormula from "../assets/logos/RadioFormulaLogo.tsx";
import MvsRadio from "../assets/logos/MvsRadioLogo.tsx";
import HeraldoRadio from "../assets/logos/HeraldoRadioLogo.tsx";
import GrupoRadioCentro from "../assets/logos/GrupoRadioCentroLogo.tsx";
import LaJornada from "../assets/logos/LaJornadaLogo.tsx";
import ElUniversal from "../assets/logos/ElUniversalLogo.tsx";
import ReformaLogo from "../assets/logos/ReformaLogo.tsx";
import MilenioNewspaper from "../assets/logos/MilenioNewspaperLogo.tsx";
import ElEconomista from "../assets/logos/ElEconomistaLogo.tsx";
import Excelsior from "../assets/logos/ExcelsiorLogo.tsx";
import React from "react";
import NRMComunicaciones from "../assets/logos/NRMComunicacionesLogo.tsx";
import ImagenTV from "../assets/logos/ImagenTVLogo.tsx";
import ImagenRadioLogo from "../assets/logos/ImagenRadioLogo.tsx";


export const tvColumn = [
    {
        name: "Grupo Milenio",
        logo: <MilenioTv width='80px' height='50px'/>
    },
    {
        name: "Bloomberg TV",
        logo: <ElFinancieroLogo width='160px' height='50px'/>
    },
    {
        name: "Latinus",
        logo: <Latinus width='80px' height='50px'/>
    },
    {
        name: "Heraldo TV",
        logo: <HeraldoTvLogo width='80px' height='50px'/>
    },
    {
        name: "Grupo Imagen",
        logo: <ImagenTV width='80px' height='50px'/>
    },
    {
        name: "TV Azteca",
        logo: <TvAztecaLogo width='80px' height='50px'/>
    },
    {
        name: "Televisa",
        logo: <Televisa width='130px' height='50px' />
    }
]

export const radioColumn = [
    {
        name: "Radio Fórmula",
        logo: <RadioFormula width='100px' height='50px'/>
    },
    {
        name: "Televisa Radio",
        logo: <Televisa width='130px' height='50px' />
    },
    {
        name: "MVS Radio",
        logo:  <MvsRadio width='90px' height='50px'/>
    },
    {
        name: "NRM Comunicaciones",
        logo: <NRMComunicaciones width='90px' height='50px'/>
    },
    {
        name: "Heraldo Media Group",
        logo: <HeraldoRadio width='110px' height='50px'/>
    },
    {
        name: "Grupo Radio Centro",
        logo: <GrupoRadioCentro width='100px' height='50px'/>
    },
    {
        name: "Imagen RADIO",
        logo:  <ImagenRadioLogo width='85px' height='50px'/>
    }
]

export const newspaperColumn = [
    {
        name: "La jornada",
        logo: <LaJornada width='140px' height='50px'/>
    },
    {
        name: "El Universal",
        logo: <ElUniversal width='140px' height='50px'/>
    },
    {
        name: "El Financiero",
        logo: <ElFinancieroLogo width='160px' height='50px'/>
    },
    {
        name: "Excelsior",
        logo: <Excelsior width='140px' height='50px'/>
    },
    {
        name: "Reforma",
        logo: <ReformaLogo width='140px' height='50px'/>
    },
    {
        name: "Milenio",
        logo: <MilenioNewspaper width='120px' height='50px'/>
    },
    {
        name: "El Economista",
        logo: <ElEconomista width='150px' height='50px'/>
    }
];

export const mediaTypesColumns = {
    television: tvColumn,
    radio: radioColumn,
    periodico: newspaperColumn,
};
