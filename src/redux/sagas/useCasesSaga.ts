// redux/sagas/useCasesSaga.ts

import { call, put, takeEvery, all } from 'redux-saga/effects';
import { IUseCase } from 'src/lib/data-structure';
import { createUseCase, updateUseCase, removeUseCase } from '../reducers/useCases';

// You can replace these with actual API calls.
function* apiCreateUseCase(useCase: IUseCase) { /* ... */ }
function* apiUpdateUseCase(useCase: IUseCase) { /* ... */ }
function* apiRemoveUseCase(useCaseId: string) { /* ... */ }

function* handleCreateUseCase(action: ReturnType<typeof createUseCase>) {
  yield call(apiCreateUseCase, action.payload);
}

function* handleUpdateUseCase(action: ReturnType<typeof updateUseCase>) {
  yield call(apiUpdateUseCase, action.payload);
}

function* handleRemoveUseCase(action: ReturnType<typeof removeUseCase>) {
  yield call(apiRemoveUseCase, action.payload);
}

function* watchUseCases() {
  yield takeEvery(createUseCase.type, handleCreateUseCase);
  yield takeEvery(updateUseCase.type, handleUpdateUseCase);
  yield takeEvery(removeUseCase.type, handleRemoveUseCase);
}

export default function* useCasesSaga() {
  yield all([
    watchUseCases(),
  ]);
}
