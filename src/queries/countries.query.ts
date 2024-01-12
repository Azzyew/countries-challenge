import { useQuery } from '@tanstack/react-query';

import { CountriesService } from '@/services/countries.service';
import { Regions } from './types';

type useCountryQueryProps = {
  name?: string;
  region?: Regions;
}

export const useCountryQuery = ({ name, region, ...options }: useCountryQueryProps) => {
  return useQuery({
    queryKey: ['get-country', { name, region }],
    queryFn: () => {
      if (name) {
        return CountriesService.getCountryByName(name);
      }
      if (region) {
        return CountriesService.getCountryByRegion(region);
      }
      return CountriesService.getAllCountries();
    },
    ...options
  })
};
