import { configure } from 'mobx';

import { RootStore } from './RootStore';

const configureMobx = (): void =>
    configure({
        enforceActions: 'always',
        computedRequiresReaction: true,
        reactionRequiresObservable: true,
        observableRequiresReaction: true,
        useProxies: 'always',
    });

configureMobx();

let rootStore: RootStore | undefined;

const createRootStore = () => {
    rootStore = new RootStore();
};

export { configureMobx, rootStore, createRootStore, RootStore };
