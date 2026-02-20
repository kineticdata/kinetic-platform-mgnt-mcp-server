export const overrides = {
    "cloneSubmission": {
    // POST /submissions/{submissionId}/clone
    },
    "createSubmission": {
    // POST /kapps/{kappSlug}/forms/{formSlug}/submissions
    },
    "createSubmissionActivity": {
    // POST /submissions/{submissionId}/activities
    },
    "createSubmissionMultipart": {
    // POST /kapps/{kappSlug}/forms/{formSlug}/submissions-multipart
    },
    "deleteSubmission": {
    // DELETE /submissions/{submissionId}
    },
    "deleteSubmissionActivity": {
    // DELETE /submissions/{submissionId}/activities/{activityId}
    },
    "listFormSubmissions": {
    // GET /kapps/{kappSlug}/forms/{formSlug}/submissions
    },
    "listFormSubmissionsAsPost": {
    // POST /kapps/{kappSlug}/forms/{formSlug}/submissions-search
    },
    "listKappSubmissions": {
    // GET /kapps/{kappSlug}/submissions
    },
    "listKappSubmissionsAsPost": {
    // POST /kapps/{kappSlug}/submissions-search
    },
    "listSubmissionActivities": {
    // GET /submissions/{submissionId}/activities
    },
    "patchExistingSubmission": {
    // PATCH /submissions/{submissionId}
    },
    "patchNewSubmission": {
    // PATCH /kapps/{kappSlug}/forms/{formSlug}/submissions
    },
    "reindexSubmissions": {
    // PUT /submissions/{submissionId}/reindex
    },
    "retrieveSubmission": {
    // GET /submissions/{submissionId}
    },
    "retrieveSubmissionActivity": {
    // GET /submissions/{submissionId}/activities/{activityId}
    },
    "retrieveSubmissionFileUrl": {
    // GET /submissions/{submissionId}/files/{fieldName}/{fileIndex}/{fileName}/url
    },
    "submitSubmissionPage": {
    // POST /submissions/{submissionId}
    },
    "updateSubmission": {
    // PUT /submissions/{submissionId}
    },
    "updateSubmissionActivity": {
    // PUT /submissions/{submissionId}/activities/{activityId}
    },
    "updateSubmissionMultipart": {
    // POST /submissions-multipart/{submissionId}
    },
};
