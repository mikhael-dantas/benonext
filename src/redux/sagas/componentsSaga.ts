// redux/sagas/componentsSaga.ts

import { call, put, takeEvery, all } from 'redux-saga/effects';
import { IComponent } from 'src/lib/data-structure';
import { createComponent, updateComponent, removeComponent } from '../reducers/components';

// You can replace these with actual API calls.
function* apiCreateComponent(component: IComponent) { /* ... */ }
function* apiUpdateComponent(component: IComponent) { /* ... */ }
function* apiRemoveComponent(componentId: string) { /* ... */ }

function* handleCreateComponent(action: ReturnType<typeof createComponent>) {
  yield call(apiCreateComponent, action.payload);
}

function* handleUpdateComponent(action: ReturnType<typeof updateComponent>) {
  yield call(apiUpdateComponent, action.payload);
}

function* handleRemoveComponent(action: ReturnType<typeof removeComponent>) {
  yield call(apiRemoveComponent, action.payload);
}

function* watchComponents() {
  yield takeEvery(createComponent.type, handleCreateComponent);
  yield takeEvery(updateComponent.type, handleUpdateComponent);
  yield takeEvery(removeComponent.type, handleRemoveComponent);
}

export default function* componentsSaga() {
  yield all([
    watchComponents(),
  ]);
}
