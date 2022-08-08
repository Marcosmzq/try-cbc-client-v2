import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ChangePasswordInput = {
  confirmNewPassword: Scalars['String'];
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type ChangeRoleInput = {
  adminSecretKey: Scalars['String'];
  newRole: UserRole;
  userID: Scalars['Int'];
};

export type Concept = {
  __typename?: 'Concept';
  author: User;
  course: Course;
  created_at: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['String'];
};

export type Course = {
  __typename?: 'Course';
  concepts: Array<Concept>;
  created_at: Scalars['String'];
  id: Scalars['Int'];
  isPremium: Scalars['Boolean'];
  name: Scalars['String'];
  notes: Array<Note>;
  quotes: Array<Quote>;
  trivias: Array<Trivia>;
  updated_at: Scalars['String'];
};

export type CreateConceptInput = {
  description: Scalars['String'];
  title: Scalars['String'];
};

export type CreateCourseInput = {
  isPremium: Scalars['Boolean'];
  name: Scalars['String'];
};

export type CreateNoteInput = {
  content: Scalars['String'];
  title: Scalars['String'];
};

export type CreateQuoteInput = {
  quoteAuthor: Scalars['String'];
  quoteContent: Scalars['String'];
};

export type CreateTimelineEventInput = {
  eventContent: Scalars['String'];
  eventDate: Scalars['String'];
  eventTitle: Scalars['String'];
};

export type CreateTimelineInput = {
  description: Scalars['String'];
  title: Scalars['String'];
};

export type CreateTriviaInput = {
  exam: ExamList;
  feedback?: InputMaybe<Scalars['String']>;
  isFlashcard: Scalars['Boolean'];
  isTrivia: Scalars['Boolean'];
  statement: Scalars['String'];
};

export type CreateTriviasAnswerInput = {
  isTrue: Scalars['Boolean'];
  statement: Scalars['String'];
};

export enum ExamList {
  Final = 'FINAL',
  First = 'FIRST',
  Second = 'SECOND'
}

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginUserResponse = {
  __typename?: 'LoginUserResponse';
  access_token: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: Scalars['String'];
  changePasswordWithToken: Scalars['String'];
  changeUserRole: User;
  createConcept: Concept;
  createCourse: Course;
  createNote: Note;
  createQuote: Quote;
  createTimeline: Timeline;
  createTimelineEvent: TimelineEvent;
  createTrivia: Trivia;
  createTriviaAnswer: TriviasAnswer;
  deleteConcept: Concept;
  deleteCourse: Course;
  deleteNote: Note;
  deleteQuote: Quote;
  deleteTimeline: Timeline;
  deleteTrivia: Trivia;
  deleteTriviaAnswer: TriviasAnswer;
  deleteUserByID: Scalars['Boolean'];
  getInitPoint: Scalars['String'];
  loginUser: LoginUserResponse;
  registerUser: LoginUserResponse;
  removeTimelineEvent: TimelineEvent;
  sendRecoveryPasswordEmail: Scalars['String'];
  updateConcept: Concept;
  updateCourse: Course;
  updateNote: Note;
  updateQuote: Quote;
  updateTimeline: Timeline;
  updateTimelineEvent: TimelineEvent;
  updateTrivia: Trivia;
  updateTriviaAnswer: TriviasAnswer;
  upgradeCurrentUserAccount: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput;
};


export type MutationChangePasswordWithTokenArgs = {
  recoveryPasswordWithToken: RecoveryPasswordWithTokenInput;
};


export type MutationChangeUserRoleArgs = {
  changeRoleInput: ChangeRoleInput;
};


export type MutationCreateConceptArgs = {
  course_id: Scalars['Int'];
  createConceptInput: CreateConceptInput;
};


export type MutationCreateCourseArgs = {
  createCourseInput: CreateCourseInput;
};


export type MutationCreateNoteArgs = {
  course_id: Scalars['Int'];
  createNoteInput: CreateNoteInput;
};


export type MutationCreateQuoteArgs = {
  course_id: Scalars['Int'];
  createQuoteInput: CreateQuoteInput;
};


export type MutationCreateTimelineArgs = {
  course_id: Scalars['Int'];
  createTimelineInput: CreateTimelineInput;
};


export type MutationCreateTimelineEventArgs = {
  createTimelineEventInput: CreateTimelineEventInput;
  timeline_id: Scalars['Int'];
};


export type MutationCreateTriviaArgs = {
  course_id: Scalars['Int'];
  createTriviaInput: CreateTriviaInput;
};


export type MutationCreateTriviaAnswerArgs = {
  createTriviasAnswerInput: CreateTriviasAnswerInput;
  trivia_id: Scalars['Int'];
};


export type MutationDeleteConceptArgs = {
  concept_id: Scalars['Int'];
};


export type MutationDeleteCourseArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteNoteArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteQuoteArgs = {
  quote_id: Scalars['Int'];
};


export type MutationDeleteTimelineArgs = {
  timeline_id: Scalars['Int'];
};


export type MutationDeleteTriviaArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteTriviaAnswerArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserByIdArgs = {
  userIdToDelete: Scalars['Int'];
};


export type MutationGetInitPointArgs = {
  user_id: Scalars['Float'];
};


export type MutationLoginUserArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRegisterUserArgs = {
  registerUserInput: SignupUserInput;
};


export type MutationRemoveTimelineEventArgs = {
  timelineEvent_id: Scalars['Int'];
};


export type MutationSendRecoveryPasswordEmailArgs = {
  email: Scalars['String'];
};


export type MutationUpdateConceptArgs = {
  concept_id: Scalars['Int'];
  updateConceptInput: UpdateConceptInput;
};


export type MutationUpdateCourseArgs = {
  course_id: Scalars['Int'];
  updateCourseInput: UpdateCourseInput;
};


export type MutationUpdateNoteArgs = {
  note_id: Scalars['Int'];
  updateNoteInput: UpdateNoteInput;
};


export type MutationUpdateQuoteArgs = {
  quote_id: Scalars['Int'];
  updateQuoteInput: UpdateQuoteInput;
};


export type MutationUpdateTimelineArgs = {
  timeline_id: Scalars['Int'];
  updateTimelineInput: UpdateTimelineInput;
};


export type MutationUpdateTimelineEventArgs = {
  timelineEvent_id: Scalars['Int'];
  updateTimelineEventInput: UpdateTimelineEventInput;
};


export type MutationUpdateTriviaArgs = {
  trivia_id: Scalars['Int'];
  updateTriviaInput: UpdateTriviaInput;
};


export type MutationUpdateTriviaAnswerArgs = {
  trivaAnswer_id: Scalars['Int'];
  updateTriviasAnswerInput: UpdateTriviasAnswerInput;
};

export type Note = {
  __typename?: 'Note';
  author: User;
  content: Scalars['String'];
  course: Course;
  created_at: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  checkIfUserHasApprovedPayments: Scalars['Boolean'];
  findAdminConceptsByCourse: Concept;
  findAllConcepts: Array<Concept>;
  findAllCourses: Array<Course>;
  findAllNotes: Array<Note>;
  findAllQuotes: Array<Quote>;
  findAllTimelineEvents: Array<TimelineEvent>;
  findAllTimelines: Array<Timeline>;
  findAllTrivias: Array<Trivia>;
  findAllTriviasAnswers: Array<TriviasAnswer>;
  findAllUsers: Array<User>;
  findConceptById: Concept;
  findConceptsByAuthor: Array<Concept>;
  findConceptsByCourse: Array<Concept>;
  findCourseByID: Course;
  findCurrentUser: User;
  findCurrentUserConceptsByCourse: Array<Note>;
  findCurrentUserQuotesByCourse: Array<Quote>;
  findCurrentUserRandomConceptByCourse: Concept;
  findCurrentUserRandomQuoteByCourse: Quote;
  findCurrentUserTimelinesByCourse: Array<Timeline>;
  findNoteById: Note;
  findNotesByAuthor: Array<Note>;
  findNotesByCourse: Array<Note>;
  findNotesByUser: Array<Quote>;
  findQuoteById: Quote;
  findRandomTimelineEvent: TimelineEvent;
  findTimelineById: Timeline;
  findTimelineEventById: TimelineEvent;
  findTimelineEventsByTimeline: TimelineEvent;
  findTriviaByID: Trivia;
  findTriviasAnswerByID: TriviasAnswer;
  findUserByID: User;
  getRandomFlashcardByParams: Trivia;
  getRandomTriviaByParams: Trivia;
};


export type QueryCheckIfUserHasApprovedPaymentsArgs = {
  user_id: Scalars['Float'];
};


export type QueryFindAdminConceptsByCourseArgs = {
  course_id: Scalars['Int'];
};


export type QueryFindConceptByIdArgs = {
  trivia_id: Scalars['Int'];
};


export type QueryFindConceptsByAuthorArgs = {
  author_id: Scalars['Int'];
};


export type QueryFindConceptsByCourseArgs = {
  course_id: Scalars['Int'];
};


export type QueryFindCourseByIdArgs = {
  id: Scalars['Int'];
};


export type QueryFindCurrentUserConceptsByCourseArgs = {
  course_id: Scalars['Int'];
};


export type QueryFindCurrentUserQuotesByCourseArgs = {
  course_id: Scalars['Int'];
};


export type QueryFindCurrentUserRandomConceptByCourseArgs = {
  course_id: Scalars['Int'];
};


export type QueryFindCurrentUserRandomQuoteByCourseArgs = {
  course_id: Scalars['Int'];
};


export type QueryFindCurrentUserTimelinesByCourseArgs = {
  course_id: Scalars['Int'];
};


export type QueryFindNoteByIdArgs = {
  id: Scalars['Int'];
};


export type QueryFindNotesByAuthorArgs = {
  author_id: Scalars['Int'];
};


export type QueryFindNotesByCourseArgs = {
  course_id: Scalars['Int'];
};


export type QueryFindNotesByUserArgs = {
  user_id: Scalars['Int'];
};


export type QueryFindQuoteByIdArgs = {
  quote_id: Scalars['Int'];
};


export type QueryFindRandomTimelineEventArgs = {
  timeline_id: Scalars['Int'];
};


export type QueryFindTimelineByIdArgs = {
  timeline_id: Scalars['Int'];
};


export type QueryFindTimelineEventByIdArgs = {
  timelineEvent_id: Scalars['Int'];
};


export type QueryFindTimelineEventsByTimelineArgs = {
  timeline_id: Scalars['Int'];
};


export type QueryFindTriviaByIdArgs = {
  id: Scalars['Int'];
};


export type QueryFindTriviasAnswerByIdArgs = {
  id: Scalars['Int'];
};


export type QueryFindUserByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetRandomFlashcardByParamsArgs = {
  course_id: Scalars['Int'];
  exam?: InputMaybe<ExamList>;
};


export type QueryGetRandomTriviaByParamsArgs = {
  course_id: Scalars['Int'];
  exam?: InputMaybe<ExamList>;
};

export type Quote = {
  __typename?: 'Quote';
  course: Course;
  created_at: Scalars['String'];
  id: Scalars['Int'];
  quoteAuthor: Scalars['String'];
  quoteContent: Scalars['String'];
  updated_at: Scalars['String'];
  user: User;
};

export type RecoveryPasswordWithTokenInput = {
  access_token: Scalars['String'];
  confirmNewPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type SignupUserInput = {
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Timeline = {
  __typename?: 'Timeline';
  course: Course;
  created_at: Scalars['String'];
  description: Scalars['String'];
  events: Array<TimelineEvent>;
  id: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['String'];
  user: User;
};

export type TimelineEvent = {
  __typename?: 'TimelineEvent';
  created_at: Scalars['String'];
  eventContent: Scalars['String'];
  eventDate: Scalars['String'];
  eventTitle: Scalars['String'];
  id: Scalars['Int'];
  timeline: Timeline;
  updated_at: Scalars['String'];
};

export type Trivia = {
  __typename?: 'Trivia';
  answers: Array<TriviasAnswer>;
  course: Course;
  created_at: Scalars['String'];
  exam: ExamList;
  feedback?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isFlashcard: Scalars['Boolean'];
  isTrivia: Scalars['Boolean'];
  statement: Scalars['String'];
  updated_at: Scalars['String'];
};

export type TriviasAnswer = {
  __typename?: 'TriviasAnswer';
  created_at: Scalars['String'];
  id: Scalars['Int'];
  isTrue: Scalars['Boolean'];
  statement: Scalars['String'];
  trivia: Trivia;
  updated_at: Scalars['String'];
};

export type UpdateConceptInput = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateCourseInput = {
  isPremium?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateNoteInput = {
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateQuoteInput = {
  quoteAuthor?: InputMaybe<Scalars['String']>;
  quoteContent?: InputMaybe<Scalars['String']>;
};

export type UpdateTimelineEventInput = {
  eventContent?: InputMaybe<Scalars['String']>;
  eventDate?: InputMaybe<Scalars['String']>;
  eventTitle?: InputMaybe<Scalars['String']>;
};

export type UpdateTimelineInput = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateTriviaInput = {
  exam?: InputMaybe<ExamList>;
  feedback?: InputMaybe<Scalars['String']>;
  isFlashcard?: InputMaybe<Scalars['Boolean']>;
  isTrivia?: InputMaybe<Scalars['Boolean']>;
  statement?: InputMaybe<Scalars['String']>;
};

export type UpdateTriviasAnswerInput = {
  isTrue?: InputMaybe<Scalars['Boolean']>;
  statement?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  concepts: Array<Concept>;
  created_at: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Int'];
  notes: Array<Note>;
  quotes: Array<Quote>;
  role: UserRole;
  timelines: Array<Timeline>;
  updated_at: Scalars['String'];
  username: Scalars['String'];
};

export enum UserRole {
  Admin = 'ADMIN',
  FreeUser = 'FREE_USER',
  PremiumUser = 'PREMIUM_USER'
}

export type CourseSnnipetFragment = { __typename?: 'Course', created_at: string, updated_at: string, id: number, name: string };

export type TriviaAnswerSnnipetFragment = { __typename?: 'TriviasAnswer', id: number, created_at: string, updated_at: string, isTrue: boolean, statement: string };

export type TriviaSnnipetFragment = { __typename?: 'Trivia', id: number, created_at: string, updated_at: string, isTrivia: boolean, isFlashcard: boolean, statement: string, feedback?: string | null, exam: ExamList };

export type UserSnnipetFragment = { __typename?: 'User', id: number, created_at: string, updated_at: string, username: string, email: string, role: UserRole };

export type AddTriviaMutationVariables = Exact<{
  course_id: Scalars['Int'];
  isTrivia: Scalars['Boolean'];
  isFlashcard: Scalars['Boolean'];
  exam: ExamList;
  statement: Scalars['String'];
  feedback?: InputMaybe<Scalars['String']>;
}>;


export type AddTriviaMutation = { __typename?: 'Mutation', createTrivia: { __typename?: 'Trivia', id: number, created_at: string, updated_at: string, isTrivia: boolean, isFlashcard: boolean, statement: string, feedback?: string | null, exam: ExamList } };

export type AddTriviaAnswerMutationVariables = Exact<{
  trivia_id: Scalars['Int'];
  statement: Scalars['String'];
  isTrue: Scalars['Boolean'];
}>;


export type AddTriviaAnswerMutation = { __typename?: 'Mutation', createTriviaAnswer: { __typename?: 'TriviasAnswer', id: number, created_at: string, updated_at: string, isTrue: boolean, statement: string } };

export type ChangePasswordMutationVariables = Exact<{
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
  confirmNewPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: string };

export type ChangePasswordWithTokenMutationVariables = Exact<{
  access_token: Scalars['String'];
  newPassword: Scalars['String'];
  confirmNewPassword: Scalars['String'];
}>;


export type ChangePasswordWithTokenMutation = { __typename?: 'Mutation', changePasswordWithToken: string };

export type GetCheckoutInitPointMutationVariables = Exact<{
  user_id: Scalars['Float'];
}>;


export type GetCheckoutInitPointMutation = { __typename?: 'Mutation', getInitPoint: string };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'LoginUserResponse', access_token: string, user: { __typename?: 'User', id: number, created_at: string, updated_at: string, username: string, email: string, role: UserRole } } };

export type SendRecoveryPasswordEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type SendRecoveryPasswordEmailMutation = { __typename?: 'Mutation', sendRecoveryPasswordEmail: string };

export type SignupMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
}>;


export type SignupMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'LoginUserResponse', access_token: string, user: { __typename?: 'User', id: number, created_at: string, updated_at: string, username: string, email: string, role: UserRole } } };

export type UpgradeAccountMutationVariables = Exact<{ [key: string]: never; }>;


export type UpgradeAccountMutation = { __typename?: 'Mutation', upgradeCurrentUserAccount: string };

export type GetAllCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCoursesQuery = { __typename?: 'Query', findAllCourses: Array<{ __typename?: 'Course', created_at: string, updated_at: string, id: number, name: string }> };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', findCurrentUser: { __typename?: 'User', id: number, created_at: string, updated_at: string, username: string, email: string, role: UserRole } };

export type GetRandomFlashcardQueryVariables = Exact<{
  exam?: InputMaybe<ExamList>;
  course_id: Scalars['Int'];
}>;


export type GetRandomFlashcardQuery = { __typename?: 'Query', getRandomFlashcardByParams: { __typename?: 'Trivia', id: number, created_at: string, updated_at: string, isTrivia: boolean, isFlashcard: boolean, statement: string, feedback?: string | null, exam: ExamList, answers: Array<{ __typename?: 'TriviasAnswer', id: number, created_at: string, updated_at: string, isTrue: boolean, statement: string }>, course: { __typename?: 'Course', created_at: string, updated_at: string, id: number, name: string } } };

export type GetRandomTriviaQueryVariables = Exact<{
  exam?: InputMaybe<ExamList>;
  course_id: Scalars['Int'];
}>;


export type GetRandomTriviaQuery = { __typename?: 'Query', getRandomTriviaByParams: { __typename?: 'Trivia', id: number, created_at: string, updated_at: string, isTrivia: boolean, isFlashcard: boolean, statement: string, feedback?: string | null, exam: ExamList, answers: Array<{ __typename?: 'TriviasAnswer', id: number, created_at: string, updated_at: string, isTrue: boolean, statement: string }>, course: { __typename?: 'Course', created_at: string, updated_at: string, id: number, name: string } } };

export const CourseSnnipetFragmentDoc = gql`
    fragment CourseSnnipet on Course {
  created_at
  updated_at
  id
  name
}
    `;
export const TriviaAnswerSnnipetFragmentDoc = gql`
    fragment TriviaAnswerSnnipet on TriviasAnswer {
  id
  created_at
  updated_at
  isTrue
  statement
}
    `;
export const TriviaSnnipetFragmentDoc = gql`
    fragment TriviaSnnipet on Trivia {
  id
  created_at
  updated_at
  isTrivia
  isFlashcard
  statement
  feedback
  exam
}
    `;
export const UserSnnipetFragmentDoc = gql`
    fragment UserSnnipet on User {
  id
  created_at
  updated_at
  username
  email
  role
}
    `;
export const AddTriviaDocument = gql`
    mutation AddTrivia($course_id: Int!, $isTrivia: Boolean!, $isFlashcard: Boolean!, $exam: ExamList!, $statement: String!, $feedback: String) {
  createTrivia(
    course_id: $course_id
    createTriviaInput: {isTrivia: $isTrivia, isFlashcard: $isFlashcard, exam: $exam, statement: $statement, feedback: $feedback}
  ) {
    ...TriviaSnnipet
  }
}
    ${TriviaSnnipetFragmentDoc}`;
export type AddTriviaMutationFn = Apollo.MutationFunction<AddTriviaMutation, AddTriviaMutationVariables>;

/**
 * __useAddTriviaMutation__
 *
 * To run a mutation, you first call `useAddTriviaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTriviaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTriviaMutation, { data, loading, error }] = useAddTriviaMutation({
 *   variables: {
 *      course_id: // value for 'course_id'
 *      isTrivia: // value for 'isTrivia'
 *      isFlashcard: // value for 'isFlashcard'
 *      exam: // value for 'exam'
 *      statement: // value for 'statement'
 *      feedback: // value for 'feedback'
 *   },
 * });
 */
export function useAddTriviaMutation(baseOptions?: Apollo.MutationHookOptions<AddTriviaMutation, AddTriviaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTriviaMutation, AddTriviaMutationVariables>(AddTriviaDocument, options);
      }
export type AddTriviaMutationHookResult = ReturnType<typeof useAddTriviaMutation>;
export type AddTriviaMutationResult = Apollo.MutationResult<AddTriviaMutation>;
export type AddTriviaMutationOptions = Apollo.BaseMutationOptions<AddTriviaMutation, AddTriviaMutationVariables>;
export const AddTriviaAnswerDocument = gql`
    mutation AddTriviaAnswer($trivia_id: Int!, $statement: String!, $isTrue: Boolean!) {
  createTriviaAnswer(
    trivia_id: $trivia_id
    createTriviasAnswerInput: {statement: $statement, isTrue: $isTrue}
  ) {
    ...TriviaAnswerSnnipet
  }
}
    ${TriviaAnswerSnnipetFragmentDoc}`;
export type AddTriviaAnswerMutationFn = Apollo.MutationFunction<AddTriviaAnswerMutation, AddTriviaAnswerMutationVariables>;

/**
 * __useAddTriviaAnswerMutation__
 *
 * To run a mutation, you first call `useAddTriviaAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTriviaAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTriviaAnswerMutation, { data, loading, error }] = useAddTriviaAnswerMutation({
 *   variables: {
 *      trivia_id: // value for 'trivia_id'
 *      statement: // value for 'statement'
 *      isTrue: // value for 'isTrue'
 *   },
 * });
 */
export function useAddTriviaAnswerMutation(baseOptions?: Apollo.MutationHookOptions<AddTriviaAnswerMutation, AddTriviaAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTriviaAnswerMutation, AddTriviaAnswerMutationVariables>(AddTriviaAnswerDocument, options);
      }
export type AddTriviaAnswerMutationHookResult = ReturnType<typeof useAddTriviaAnswerMutation>;
export type AddTriviaAnswerMutationResult = Apollo.MutationResult<AddTriviaAnswerMutation>;
export type AddTriviaAnswerMutationOptions = Apollo.BaseMutationOptions<AddTriviaAnswerMutation, AddTriviaAnswerMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($currentPassword: String!, $newPassword: String!, $confirmNewPassword: String!) {
  changePassword(
    changePasswordInput: {currentPassword: $currentPassword, newPassword: $newPassword, confirmNewPassword: $confirmNewPassword}
  )
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      currentPassword: // value for 'currentPassword'
 *      newPassword: // value for 'newPassword'
 *      confirmNewPassword: // value for 'confirmNewPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ChangePasswordWithTokenDocument = gql`
    mutation ChangePasswordWithToken($access_token: String!, $newPassword: String!, $confirmNewPassword: String!) {
  changePasswordWithToken(
    recoveryPasswordWithToken: {access_token: $access_token, newPassword: $newPassword, confirmNewPassword: $confirmNewPassword}
  )
}
    `;
export type ChangePasswordWithTokenMutationFn = Apollo.MutationFunction<ChangePasswordWithTokenMutation, ChangePasswordWithTokenMutationVariables>;

/**
 * __useChangePasswordWithTokenMutation__
 *
 * To run a mutation, you first call `useChangePasswordWithTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordWithTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordWithTokenMutation, { data, loading, error }] = useChangePasswordWithTokenMutation({
 *   variables: {
 *      access_token: // value for 'access_token'
 *      newPassword: // value for 'newPassword'
 *      confirmNewPassword: // value for 'confirmNewPassword'
 *   },
 * });
 */
export function useChangePasswordWithTokenMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordWithTokenMutation, ChangePasswordWithTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordWithTokenMutation, ChangePasswordWithTokenMutationVariables>(ChangePasswordWithTokenDocument, options);
      }
export type ChangePasswordWithTokenMutationHookResult = ReturnType<typeof useChangePasswordWithTokenMutation>;
export type ChangePasswordWithTokenMutationResult = Apollo.MutationResult<ChangePasswordWithTokenMutation>;
export type ChangePasswordWithTokenMutationOptions = Apollo.BaseMutationOptions<ChangePasswordWithTokenMutation, ChangePasswordWithTokenMutationVariables>;
export const GetCheckoutInitPointDocument = gql`
    mutation GetCheckoutInitPoint($user_id: Float!) {
  getInitPoint(user_id: $user_id)
}
    `;
export type GetCheckoutInitPointMutationFn = Apollo.MutationFunction<GetCheckoutInitPointMutation, GetCheckoutInitPointMutationVariables>;

/**
 * __useGetCheckoutInitPointMutation__
 *
 * To run a mutation, you first call `useGetCheckoutInitPointMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetCheckoutInitPointMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getCheckoutInitPointMutation, { data, loading, error }] = useGetCheckoutInitPointMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetCheckoutInitPointMutation(baseOptions?: Apollo.MutationHookOptions<GetCheckoutInitPointMutation, GetCheckoutInitPointMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetCheckoutInitPointMutation, GetCheckoutInitPointMutationVariables>(GetCheckoutInitPointDocument, options);
      }
export type GetCheckoutInitPointMutationHookResult = ReturnType<typeof useGetCheckoutInitPointMutation>;
export type GetCheckoutInitPointMutationResult = Apollo.MutationResult<GetCheckoutInitPointMutation>;
export type GetCheckoutInitPointMutationOptions = Apollo.BaseMutationOptions<GetCheckoutInitPointMutation, GetCheckoutInitPointMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  loginUser(loginUserInput: {email: $email, password: $password}) {
    access_token
    user {
      ...UserSnnipet
    }
  }
}
    ${UserSnnipetFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SendRecoveryPasswordEmailDocument = gql`
    mutation SendRecoveryPasswordEmail($email: String!) {
  sendRecoveryPasswordEmail(email: $email)
}
    `;
export type SendRecoveryPasswordEmailMutationFn = Apollo.MutationFunction<SendRecoveryPasswordEmailMutation, SendRecoveryPasswordEmailMutationVariables>;

/**
 * __useSendRecoveryPasswordEmailMutation__
 *
 * To run a mutation, you first call `useSendRecoveryPasswordEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendRecoveryPasswordEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendRecoveryPasswordEmailMutation, { data, loading, error }] = useSendRecoveryPasswordEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSendRecoveryPasswordEmailMutation(baseOptions?: Apollo.MutationHookOptions<SendRecoveryPasswordEmailMutation, SendRecoveryPasswordEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendRecoveryPasswordEmailMutation, SendRecoveryPasswordEmailMutationVariables>(SendRecoveryPasswordEmailDocument, options);
      }
export type SendRecoveryPasswordEmailMutationHookResult = ReturnType<typeof useSendRecoveryPasswordEmailMutation>;
export type SendRecoveryPasswordEmailMutationResult = Apollo.MutationResult<SendRecoveryPasswordEmailMutation>;
export type SendRecoveryPasswordEmailMutationOptions = Apollo.BaseMutationOptions<SendRecoveryPasswordEmailMutation, SendRecoveryPasswordEmailMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($username: String!, $email: String!, $password: String!, $confirmPassword: String!) {
  registerUser(
    registerUserInput: {username: $username, email: $email, password: $password, confirmPassword: $confirmPassword}
  ) {
    access_token
    user {
      ...UserSnnipet
    }
  }
}
    ${UserSnnipetFragmentDoc}`;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      confirmPassword: // value for 'confirmPassword'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const UpgradeAccountDocument = gql`
    mutation UpgradeAccount {
  upgradeCurrentUserAccount
}
    `;
export type UpgradeAccountMutationFn = Apollo.MutationFunction<UpgradeAccountMutation, UpgradeAccountMutationVariables>;

/**
 * __useUpgradeAccountMutation__
 *
 * To run a mutation, you first call `useUpgradeAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpgradeAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upgradeAccountMutation, { data, loading, error }] = useUpgradeAccountMutation({
 *   variables: {
 *   },
 * });
 */
export function useUpgradeAccountMutation(baseOptions?: Apollo.MutationHookOptions<UpgradeAccountMutation, UpgradeAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpgradeAccountMutation, UpgradeAccountMutationVariables>(UpgradeAccountDocument, options);
      }
export type UpgradeAccountMutationHookResult = ReturnType<typeof useUpgradeAccountMutation>;
export type UpgradeAccountMutationResult = Apollo.MutationResult<UpgradeAccountMutation>;
export type UpgradeAccountMutationOptions = Apollo.BaseMutationOptions<UpgradeAccountMutation, UpgradeAccountMutationVariables>;
export const GetAllCoursesDocument = gql`
    query GetAllCourses {
  findAllCourses {
    ...CourseSnnipet
  }
}
    ${CourseSnnipetFragmentDoc}`;

/**
 * __useGetAllCoursesQuery__
 *
 * To run a query within a React component, call `useGetAllCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCoursesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCoursesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCoursesQuery, GetAllCoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCoursesQuery, GetAllCoursesQueryVariables>(GetAllCoursesDocument, options);
      }
export function useGetAllCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCoursesQuery, GetAllCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCoursesQuery, GetAllCoursesQueryVariables>(GetAllCoursesDocument, options);
        }
export type GetAllCoursesQueryHookResult = ReturnType<typeof useGetAllCoursesQuery>;
export type GetAllCoursesLazyQueryHookResult = ReturnType<typeof useGetAllCoursesLazyQuery>;
export type GetAllCoursesQueryResult = Apollo.QueryResult<GetAllCoursesQuery, GetAllCoursesQueryVariables>;
export const GetCurrentUserDocument = gql`
    query GetCurrentUser {
  findCurrentUser {
    ...UserSnnipet
  }
}
    ${UserSnnipetFragmentDoc}`;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
      }
export function useGetCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
        }
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetRandomFlashcardDocument = gql`
    query GetRandomFlashcard($exam: ExamList, $course_id: Int!) {
  getRandomFlashcardByParams(exam: $exam, course_id: $course_id) {
    ...TriviaSnnipet
    answers {
      ...TriviaAnswerSnnipet
    }
    course {
      ...CourseSnnipet
    }
  }
}
    ${TriviaSnnipetFragmentDoc}
${TriviaAnswerSnnipetFragmentDoc}
${CourseSnnipetFragmentDoc}`;

/**
 * __useGetRandomFlashcardQuery__
 *
 * To run a query within a React component, call `useGetRandomFlashcardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRandomFlashcardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRandomFlashcardQuery({
 *   variables: {
 *      exam: // value for 'exam'
 *      course_id: // value for 'course_id'
 *   },
 * });
 */
export function useGetRandomFlashcardQuery(baseOptions: Apollo.QueryHookOptions<GetRandomFlashcardQuery, GetRandomFlashcardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRandomFlashcardQuery, GetRandomFlashcardQueryVariables>(GetRandomFlashcardDocument, options);
      }
export function useGetRandomFlashcardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRandomFlashcardQuery, GetRandomFlashcardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRandomFlashcardQuery, GetRandomFlashcardQueryVariables>(GetRandomFlashcardDocument, options);
        }
export type GetRandomFlashcardQueryHookResult = ReturnType<typeof useGetRandomFlashcardQuery>;
export type GetRandomFlashcardLazyQueryHookResult = ReturnType<typeof useGetRandomFlashcardLazyQuery>;
export type GetRandomFlashcardQueryResult = Apollo.QueryResult<GetRandomFlashcardQuery, GetRandomFlashcardQueryVariables>;
export const GetRandomTriviaDocument = gql`
    query GetRandomTrivia($exam: ExamList, $course_id: Int!) {
  getRandomTriviaByParams(exam: $exam, course_id: $course_id) {
    ...TriviaSnnipet
    answers {
      ...TriviaAnswerSnnipet
    }
    course {
      ...CourseSnnipet
    }
  }
}
    ${TriviaSnnipetFragmentDoc}
${TriviaAnswerSnnipetFragmentDoc}
${CourseSnnipetFragmentDoc}`;

/**
 * __useGetRandomTriviaQuery__
 *
 * To run a query within a React component, call `useGetRandomTriviaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRandomTriviaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRandomTriviaQuery({
 *   variables: {
 *      exam: // value for 'exam'
 *      course_id: // value for 'course_id'
 *   },
 * });
 */
export function useGetRandomTriviaQuery(baseOptions: Apollo.QueryHookOptions<GetRandomTriviaQuery, GetRandomTriviaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRandomTriviaQuery, GetRandomTriviaQueryVariables>(GetRandomTriviaDocument, options);
      }
export function useGetRandomTriviaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRandomTriviaQuery, GetRandomTriviaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRandomTriviaQuery, GetRandomTriviaQueryVariables>(GetRandomTriviaDocument, options);
        }
export type GetRandomTriviaQueryHookResult = ReturnType<typeof useGetRandomTriviaQuery>;
export type GetRandomTriviaLazyQueryHookResult = ReturnType<typeof useGetRandomTriviaLazyQuery>;
export type GetRandomTriviaQueryResult = Apollo.QueryResult<GetRandomTriviaQuery, GetRandomTriviaQueryVariables>;