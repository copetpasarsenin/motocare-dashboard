# AGENTS.md

Project: MotoCare Dashboard

Goal:
Build a fullstack web service assignment using Go Fiber backend, Supabase PostgreSQL, GORM, JWT auth, Swagger docs, and React Vite frontend.

Main requirements:
- Backend must use Golang, Fiber, GORM, and Supabase PostgreSQL.
- Authentication must use JWT Bearer Token.
- Password must be hashed using bcrypt.
- Role authorization must support admin and user.
- Swagger UI must be available at /docs.
- Frontend must have login, register, dashboard, list, detail, create, edit, delete confirmation, and logout.
- Frontend must store token in localStorage and send Authorization: Bearer <token>.
- Backend must use middleware: Logger, CORS, JWT Authentication, and role authorization.
- Backend must be modular.
- Backend and frontend must both have validation.
- Do not push .env to GitHub.

Theme:
MotoCare Dashboard, a motorcycle service booking and service management dashboard.

Database entities:
- users
- service_categories
- services
- bookings

Backend structure:
- config
- models
- repositories
- handlers
- middlewares
- routes
- utils
- seeders
- docs

Frontend structure:
- components
- pages
- routes
- services
- utils

Bonus features:
- Dashboard statistics
- Chart visualization
- Server-side pagination
- Sorting
- Dark mode
- Export Excel

Rules:
- Work step by step.
- Do not implement everything in one huge change.
- Do not remove required assignment features.
- Explain changed files after every task.
- Run formatting and build checks before finishing.
- Keep code clean, readable, and easy to explain during Indonesian presentation.

Backend commands:
- go mod tidy
- go run main.go
- swag init
- go test ./...

Frontend commands:
- npm install
- npm run dev
- npm run build