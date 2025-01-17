import { AstarDomainSDK } from '../../../src/types';
import { getAstrDomainSDK } from '../../../src/getAstrDomainSDK';
import { DOMAIN } from '../../utils/data';

describe('getMetadata', () => {
  let sdk: AstarDomainSDK;

  beforeEach(async () => {
    sdk = await getAstrDomainSDK();
  });

  test('should return metadata', async () => {
    const metadata = await sdk.getMetadata({ key: 'avatar', domain: DOMAIN });
    expect(metadata).toEqual({ key: 'avatar', value: '' });
  });
});
