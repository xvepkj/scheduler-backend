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
- Return type:
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
- Return type:
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
- Return type:
  ```
  [ Template ]
  ```
- Response guarantees: -

### GET `/api/templates/:id`

- Path params:
  - `id`: Unique identifier for a template
- Query params: -
- Validations: -
- Return type:
  ```
  Template
  ```
- Response guarantees: -

### GET `/api/templates/active`

- Path params: -
- Query params: -
- Validations: -
- Return type:
  ```
  [ ActiveTemplate ]
  ```
- Response guarantees: -

### GET `/api/templates/active/:id`

- Path params: -
- Query params: -
- Validations: -
- Return type:
  ```
  [ ActiveTemplate ]
  ```
- Response guarantees: -

### GET `/api/tags`

- Path params: -
- Query params: -
- Validations: -
- Return type:
  ```
  [ Tag ]
  ```
- Response guarantees: -

### GET `/api/tags/:id`

- Path params: -
- Query params: -
- Validations: -
- Return type:
  ```
  Tag
  ```
- Response guarantees: -

### GET `/api/stats`

- Path params: -
- Query params: -
- Validations: -
- Return type:
- Response guarantees: -
  ```
  Stats
  ```

### POST `/api/events`

### POST `/api/tags`

### POST `/api/templates`

### POST `/api/templates/active`

### PUT `/api/events`

### PUT `/api/templates`

### PUT `/api/templates/active`

### PUT `/api/tags`

### DELETE `/api/events`

### DELETE `/api/templates/active`

### DELETE `/api/templates`

### DELETE `/api/tags`

