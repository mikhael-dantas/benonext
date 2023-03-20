// redux/sagas/nestedUseCasesSaga.ts

import { call, put, takeEvery, all } from 'redux-saga/effects';
import { INestedUseCase } from 'src/lib/data-structure';
import { createNestedUseCase, updateNestedUseCase, removeNestedUseCase } from '../reducers/nestedUseCases';

// You can replace these with actual API calls.
function* apiCreateNestedUseCase(nestedUseCase: INestedUseCase) { /* ... */ }
function* apiUpdateNestedUseCase(nestedUseCase: INestedUseCase) { /* ... */ }
function* apiRemoveNestedUseCase(nestedUseCaseId: string) { /* ... */ }

function* handleCreateNestedUseCase(action: ReturnType<typeof createNestedUseCase>) {
  yield call(apiCreateNestedUseCase, action.payload);
}

function* handleUpdateNestedUseCase(action: ReturnType<typeof updateNestedUseCase>) {
  yield call(apiUpdateNestedUseCase, action.payload);
}

function* handleRemoveNestedUseCase(action: ReturnType<typeof removeNestedUseCase>) {
  yield call(apiRemoveNestedUseCase, action.payload);
}

function* watchNestedUseCases() {
  yield takeEvery(createNestedUseCase.type, handleCreateNestedUseCase);
  yield takeEvery(updateNestedUseCase.type, handleUpdateNestedUseCase);
  yield takeEvery(removeNestedUseCase.type, handleRemoveNestedUseCase);
}

export default function* nestedUseCasesSaga() {
  yield all([
    watchNestedUseCases(),
  ]);
}
