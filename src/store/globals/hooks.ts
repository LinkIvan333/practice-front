import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';

import { RootStore } from 'store/globals/RootStore';

export function useRootStore(): RootStore {
  return useContext(MobXProviderContext).rootStore;
}
