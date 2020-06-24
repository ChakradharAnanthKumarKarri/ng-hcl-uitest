interface Currency {
    code: string;
    name: string;
    symbol: string;
}

interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

interface Translation {
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
}

interface RegionalBloc {
    acronym: string;
    name: string;
    otherAcronyms: Array<string>;
    otherNames: Array<string>;
}

export default interface Country {
    name: string;
    topLevelDomain: Array<string>;
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: Array<string>;
    capital: string;
    altSpellings: Array<string>;
    region: string;
    subregion: string;
    population: number;
    latlng: Array<number>;
    demonym: string;
    area: number;
    gini?: number;
    timezones: Array<string>;
    borders: Array<string>;
    nativeName: string;
    numericCode: number;
    currencies: Array<Currency>;
    languages: Array<Language>;
    translations: Array<Translation>;
    flag: string;
    regionalBlocs: Array<RegionalBloc>;
    cioc: string;
}
