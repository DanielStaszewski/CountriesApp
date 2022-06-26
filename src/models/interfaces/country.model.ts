export interface Country {
    name: {
        common: string,
        official: string
    },
    capital: string[],
    region: string,
    subregion: string,
    languages: {
        [property: string]: string
    },
    area: number,
    maps: {
        googleMaps: string,
        openStreetsMaps: string
    },
    population: number,
    flags: {
        png: string,
        svg: string
    },
    continents: string[]
}