export type PopularMovieListType = {
    backdrop_path: string;
    id: number;
    title: string;
    vote_average: number;
}[];

export type getMovieByIdType = {
    backdrop_path: string;
    budget: number;
    genres: {
        id: number;
        name: string;
    }[];
    overview: string;
    poster_path: string;
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    release_date: string;
    revenue: number;
    runtime: number;
    status: string;
    tagline: string;
    title: string;
    vote_average: number;
};

export type PopularSeriesListType = {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
    vote_average: number;
};
export type SeriesByIdInfoType = {
    id: number;
    backdrop_path: string;
    name: string;
    poster_path: string;
    tagline: string;
    genres: {
        id: number;
        name: string;
    }[];
    first_air_date: string;
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    episode_run_time: number[];
    vote_average: number;
    overview: string;
    status: string;
    seasons: {
        air_date: string;
        episode_count: number;
        id: number;
        name: string;
        overview: string;
        poster_path: string;
        season_number: number[];
    }[];
};
export type EpisodesType = {
    air_date?: string | null;
    episode_number?: number;
    id?: number;
    name?: string;
    overview?: string;
    production_code?: string;
    runtime?: number;
    season_number?: number;
    show_id?: number;
    still_path?: string;
    vote_average?: number;
    vote_count?: number;
    crew?: {
        department?: string;
        job?: string;
        credit_id?: string;
        adult?: false;
        gender?: number;
        id?: number;
        known_for_department?: string;
        name?: string;
        original_name?: string;
        popularity?: number;
        profile_path?: string;
    }[];
    guest_stars?: [];
};

export type SeasonType = {
    _id?: string;
    air_date?: string;
    episodes?: {
        air_date?: string | null;
        episode_number?: number;
        id?: number;
        name?: string;
        overview?: string;
        production_code?: string;
        runtime?: number;
        season_number?: number;
        show_id?: number;
        still_path?: string;
        vote_average?: number;
        vote_count?: number;
        crew?: {
            department?: string;
            job?: string;
            credit_id?: string;
            adult?: false;
            gender?: number;
            id?: number;
            known_for_department?: string;
            name?: string;
            original_name?: string;
            popularity?: number;
            profile_path?: string;
        }[];
        guest_stars?: [];
    }[];
    name?: string;
    overview?: string;
    id?: number;
    poster_path?: string;
    season_number?: number;
};

export type PopularPeopleType = {
    adult: false;
    gender: number;
    id: number;
    known_for: {
        adult?: false;
        backdrop_path?: string;
        genre_ids?: number[];
        id?: number;
        media_type?: string;
        original_language?: string;
        original_title?: string;
        overview?: string;
        poster_path?: string;
        release_date?: string;
        title?: string;
        video?: false;
        vote_average?: number;
        vote_count?: number;
        name?: string;
        origin_country?: string[];
        original_name?: string;
    }[];
    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: string;
}[];
