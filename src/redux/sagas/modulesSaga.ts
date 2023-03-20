// redux/sagas/modulesSaga.ts

import { call, put, takeEvery, all } from 'redux-saga/effects';
import { IModule } from 'src/lib/data-structure';
import { createModule, updateModule, removeModule } from '../reducers/modules';

// You can replace these with actual API calls.
function* apiCreateModule(module: IModule) { /* ... */ }
function* apiUpdateModule(module: IModule) { /* ... */ }
function* apiRemoveModule(moduleId: string) { /* ... */ }

function* handleCreateModule(action: ReturnType<typeof createModule>) {
  yield call(apiCreateModule, action.payload);
}

function* handleUpdateModule(action: ReturnType<typeof updateModule>) {
  yield call(apiUpdateModule, action.payload);
}

function* handleRemoveModule(action: ReturnType<typeof removeModule>) {
  yield call(apiRemoveModule, action.payload);
}

function* watchModules() {
  yield takeEvery(createModule.type, handleCreateModule);
  yield takeEvery(updateModule.type, handleUpdateModule);
  yield takeEvery(removeModule.type, handleRemoveModule);
}

export default function* modulesSaga() {
  yield all([
    watchModules(),
  ]);
}
