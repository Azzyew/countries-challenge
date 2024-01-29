import { useQuery } from '@tanstack/react-query';

import { CountriesService } from '@/services/countries.service';
import { Regions } from './types';

type useCountryQueryProps = {
  name?: string;
  region?: Regions;
  code?: string;
}

export const useCountryQuery = ({ name, region, code, ...options }: useCountryQueryProps) => {
  return useQuery({
    queryKey: ['get-country', { name, region, code, }],
    queryFn: () => {
      if (name) {
        return CountriesService.getCountryByName(name);
      }
      if (region) {
        return CountriesService.getCountryByRegion(region);
      }
      if (code) {
        return CountriesService.getCountryByCode(code);
      }
      return CountriesService.getAllCountries();
    },
    ...options
  })
};
