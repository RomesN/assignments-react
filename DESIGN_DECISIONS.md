# Solution Documentation

This document provides a brief overview of the project and explains the reasoning behind the choice of key technologies, tools, and architectural decisions.

## Main Decisions and Their Rationale

**1. Using TanStack Query**

I used TanStack Query to simplify the task of managing data received from the API. It helped minimize the amount of code needed for setting and synchronizing the state of to-do items and simplified the management of loading and error states. Since this is not a complex application, I did not utilize other features of the library, such as automatic retries or data refetching.

**2. Centralized Error Display**

To simplify error handling, I created a React context to manage system-wide errors. Any errors, such as those from API communication or those caught by an ErrorBoundary, are passed to this context. If any errors are present, they are displayed in a dedicated component at the top of the user's view.

**3. Code Organization and Modularity**

I structured the functions and components into separate files for the following reasons:

**Readability**: Smaller, focused files are easier to read and understand.

**Reusability**: Functions and components can be easily reused in other parts of the application.

**Maintainability**: Each file or component can be developed, tested, and debugged independently.

The directory structure is organized as follows:

`./client/api`: Contains Axios calls to the API and TanStack Query configurations that define how to update the application's state after successful API calls.

`./client/hooks`: Contains reusable React hooks.

`./client/types`: Contains TypeScript definitions used across the entire client-side application.

`./client/utils`: Contains utility functions.

`./client/components`: This directory, which existed at the start of the assignment, now also contains newly created components.

**4. Custom server endpoint**

Since only one non-complex endpoint was required, I implemented it directly within the main server file for simplicity. As per the assignment's requirements, this endpoint's sole function is to change the isDone flag to true and put the finishAt timestamp. For future enhancements, its usability could be improved by allowing it to toggle the flag's value between true and false.
