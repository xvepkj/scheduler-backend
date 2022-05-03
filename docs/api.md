# API Specification

## Routes summary

|Type|Path|
|---|---|
| GET | `/api/about` |
| GET | `/api/events/:date` |
| GET | `/api/templates` |
| GET | `/api/templates/:id` |
| GET | `/api/templates/active` |
| GET | `/api/templates/active/:id` |
| GET | `/api/tags` |
| GET | `/api/tags/:id` |
| GET | `/api/stats` |
| POST | `/api/events` |
| POST | `/api/tags` |
| POST | `/api/templates` |
| POST | `/api/templates/active` |
| PUT | `/api/events` |
| PUT | `/api/templates` |
| PUT | `/api/templates/active` |
| PUT | `/api/tags` |
| DELETE | `/api/events` |
| DELETE | `/api/templates/active` |
| DELETE | `/api/templates` |
| DELETE | `/api/tags` |

## Details

### GET `/api/about`

- Path params: -
- Query params: -
- Validations: -
- Returns:
  ```
  {
    "version": string,
    "developers": string
    "content": string
  }
  ```
- Response guarantees: -

### GET `/api/events/:date`

- Path params:
  - `date`: string
- Query params: -
- Validations:
  - `date` should be of format `yyyymmdd` representing a valid date
- Returns:
  ```
  [ Event ]
  ```
- Response guarantees:
  - Events will be sorted first by start times then end times then name.
    Events with same time and name will have no guaranteed order.

### GET `/api/templates`

- Path params: -
- Query params: -
- Validations: -
- Returns:
  ```
  [ Template ]
  ```
- Response guarantees: -

### GET `/api/templates/:id`

- Path params:
  - `id`: Unique identifier for a template
- Query params: -
- Validations: -
- Returns:
  ```
  Template
  ```
- Response guarantees: -

### GET `/api/templates/active`

- Path params: -
- Query params: -
- Validations: -
- Returns:
  ```
  [ ActiveTemplate ]
  ```
- Response guarantees: -

### GET `/api/templates/active/:id`

- Path params: -
- Query params: -
- Validations: -
- Returns:
  ```
  [ ActiveTemplate ]
  ```
- Response guarantees: -

### GET `/api/tags`

- Path params: -
- Query params: -
- Validations: -
- Returns:
  ```
  [ Tag ]
  ```
- Response guarantees: -

### GET `/api/tags/:id`

- Path params: -
- Query params: -
- Validations: -
- Returns:
  ```
  Tag
  ```
- Response guarantees: -

### GET `/api/stats`

- Path params: -
- Query params: -
- Validations: -
- Returns:
- Response guarantees: -
  ```
  Stats
  ```

***

### POST `/api/events`

- Path params: -
- Body:
  ```
  {
    "name": string,
    "date": string,
    "startTime": string,
    "endTime": string,
    "trackingType": string in ["UNTRACKED", "TRACKED", "TIME_TRACKED"]
    "tagId": string OR null
  }
  ```
- Validations:
  - Standard event validations:
    - `name` should be a non-empty string (after trimming spaces)
    - `endTime` should not be earlier than `startTime`
    - Either `tagId` is valid (there should be a tag existing with given id) or
      it is `null` meaning no tag should be associated with this event.
- Returns:
  ```
  Event
  ```

### POST `/api/tags`

- Path params: -
- Body:
  ```
  {
    "name": string,
    "color": string
  }
  ```
- Validations:
  - Standard tag validations:
    - `name` should be a non-empty string (after trimming spaces)
    - `color` should be of form `#rrggbb` representing a valid color.
- Returns: Created tag
  ```
  Tag
  ```

### POST `/api/templates`

- Path params: -
- Body:
  ```
  [
    {
      "name": string,
      "startTime": string,
      "endTime": string,
      "trackingType": string in ["UNTRACKED", "TRACKED", "TIME_TRACKED"]
      "tagId": string OR null
    }
  ]
  ```
- Validations:
  - Standard event validations apply to each event.
- Returns:  
  ```
  Template
  ```

### POST `/api/templates/active`

- Path params: -
- Body:
  ```
  {
    "templateId": string,
    "startingDate": string
    "repeatCriteria": string in ["CUSTOM", "WEEKLY", "MONTHLY", "FREQUENCY"]
    "repeatCriteriaData": ?
  }
  ```
- Validations:
  - Standard active template validations:
    - There should be a template existing with given `templateId`.
    - `startingDate` has format `yyyymmdd` representing a valid date.
    - `repeatCriteriaData` is expected to be in a particular format depending on `repeatCriteria`
      - If `CUSTOM`, it should be a list of strings of format `yyyymmdd` representing distinct dates.
      - If `WEEKLY`, it should be a list of distinct integers from 1 to 7.
      - If `MONTHLY`, it should be a list of distinct integers from 1 to 31.
      - If `FREQUENCY`, it should be a positive integer.
- Returns: Created active template
  ```
  ActiveTemplate
  ```

### PUT `/api/events`

- Path params: -
- Body:
  ```
  {
    "id": string,
    "name": string,
    "date": string,
    "startTime": string,
    "endTime": string,
    "trackingType": string in ["UNTRACKED", "TRACKED", "TIME_TRACKED"]
    "tagId": string OR null
  }
  ```
- Validations:
  - There should be an event existing with given `id`.
  - Standard event validations are applicable.
- Returns: Updated event
  ```
  Event
  ```

### PUT `/api/templates`

- Path params: -
- Body:
  ```
  {
    "id": string,
    "events": [
      {
        "name": string,
        "startTime": string,
        "endTime": string,
        "trackingType": string in ["UNTRACKED", "TRACKED", "TIME_TRACKED"]
        "tagId": string OR null
      }
    ]
  }
  ```
- Validations:
  - There should be a template existing with given `id`.
  - Standard event validations apply to each event.
- Returns: Updated template
  ```
  Template
  ```

### PUT `/api/templates/active`

- Path params: -
- Body:
  ```
  {
    "id": string,
    "templateId": string,
    "startingDate": string
    "repeatCriteria": string in ["CUSTOM", "WEEKLY", "MONTHLY", "FREQUENCY"]
    "repeatCriteriaData": ?
  }
  ```
- Validations:
  - There should be an active template existing with given `id`.
  - Standard active template validations apply.
- Returns: Updated active template
  ```
  ActiveTemplate
  ```

### PUT `/api/tags`

- Path params: -
- Body:
  ```
  {
    "id": string,
    "name": string,
    "color": string
  }
  ```
- Validations:
  - There should be a tag existing with given `id`.
  - Standard tag validations apply
- Returns: Updated tag
  ```
  Tag
  ```

***

### DELETE `/api/events`

- Path params: -
- Body:
  ```
  {
    "id": string
  }
  ```
- Validations:
- Returns:
  ```
  StandardResult
  ```

### DELETE `/api/templates/active`

- Path params: -
- Body:
  ```
  {
    "id": string
  }
  ```
- Validations:
- Returns:  
  ```
  StandardResult
  ```

### DELETE `/api/templates`

- Path params: -
- Body:
  ```
  {
    "id": string
  }
  ```
- Validations:
- Returns:  
  ```
  StandardResult
  ```

### DELETE `/api/tags`

- Path params: -
- Body:
  ```
  {
    "id": string
  }
  ```
- Validations:
- Returns:
  ```
  StandardResult
  ```

***