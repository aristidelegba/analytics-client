import axios from 'axios';
import { MatomoMethod, MatomoMethodParams, TMatomoConfig } from '../types';


export class MatomoClient {
  matomoConfigs!: TMatomoConfig
  constructor() {

  }

  initConfig(data: TMatomoConfig) {
    console.log('data', data)
    this.matomoConfigs = data
  }

  createMatomoAPIRequest(method: string): MatomoMethod {
    return async (params: MatomoMethodParams) => {
      try {
        if(!this.matomoConfigs) throw new Error("Please set matomo configs and retry")
        const baseUrl = this.matomoConfigs.baseUrl;
        const queryParams = {
          module: 'API',
          method,
          idSite: this.matomoConfigs.idSite,
          token_auth: this.matomoConfigs.tokenAuth,
          format: 'json',
          ...params,
        };

        const response = await axios.get(baseUrl, { params: queryParams });
        return response.data;
      } catch (error) {
        console.error('Error making Matomo API request:', error);
        throw error;
      }
    };
  };


  private async manualArchiving() {
    console.log('this.matomoConfigs', this.matomoConfigs)
    return await axios.post(this.matomoConfigs.baseUrl + "/misc/cron/archive.php", { token_auth: this.matomoConfigs.tokenAuth })
  }

}

const matomoClientCore = new MatomoClient()
export default matomoClientCore