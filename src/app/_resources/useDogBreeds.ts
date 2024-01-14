import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export interface DogBreed {
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
}

interface IUseDogBreeds {
  limit?: Number;
}
export default function useDogBreeds({ limit = 3 }: IUseDogBreeds) {
  const url = "https://api.thedogapi.com/v1/breeds";
  const fullUrl = `${url}?limit=${limit}`;

  const {
    data,
    error,
    isLoading: loading,
  } = useSWR<DogBreed[]>(fullUrl, fetcher);

  return {
    breeds: data,
    isLoading: loading || !data,
    isError: error,
  };
}
