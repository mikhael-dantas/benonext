// redux/sagas/tagsSaga.ts

import { call, put, takeEvery, all } from 'redux-saga/effects';
import { ITag } from 'src/lib/data-structure';
import { createTag, updateTag, removeTag } from '../reducers/tags';

// You can replace these with actual API calls.
function* apiCreateTag(tag: ITag) { /* ... */ }
function* apiUpdateTag(tag: ITag) { /* ... */ }
function* apiRemoveTag(tagId: string) { /* ... */ }

function* handleCreateTag(action: ReturnType<typeof createTag>) {
  yield call(apiCreateTag, action.payload);
}

function* handleUpdateTag(action: ReturnType<typeof updateTag>) {
  yield call(apiUpdateTag, action.payload);
}

function* handleRemoveTag(action: ReturnType<typeof removeTag>) {
  yield call(apiRemoveTag, action.payload);
}

function* watchTags() {
  yield takeEvery(createTag.type, handleCreateTag);
  yield takeEvery(updateTag.type, handleUpdateTag);
  yield takeEvery(removeTag.type, handleRemoveTag);
}

export default function* tagsSaga() {
  yield all([
    watchTags(),
  ]);
}
