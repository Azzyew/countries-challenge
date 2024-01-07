/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';

import { CountriesService } from '@/services/countries.service';

export class CountriesQuery {
  static getAllCountries() {
    return useQuery({
      queryKey: ['Countries-get-all-Countries', ],
      queryFn: async () => {
        const data = await CountriesService.getAllCountries();

        return data;
      },
    });
  }
}
