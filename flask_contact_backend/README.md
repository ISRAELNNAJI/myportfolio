# Flask Contact Backend

This is a simple Flask backend to handle contact form submissions.

## Setup

1. Make sure you have Python 3 installed.

2. Create a virtual environment (optional but recommended):

```bash
python -m venv venv
```

3. Activate the virtual environment:

- On Windows:

```bash
venv\\Scripts\\activate
```

- On macOS/Linux:

```bash
source venv/bin/activate
```

4. Install dependencies:

```bash
pip install flask flask-cors
```

## Running the server

Run the Flask app:

```bash
python app.py
```

The server will start on `http://localhost:5000`.

## Using with your frontend

Update your contact form submission URL to:

```
http://localhost:5000/contact
```

Make sure your frontend is allowed to make requests to this URL (CORS is enabled in the backend).

You can deploy this Flask app to any hosting provider that supports Python (Heroku, AWS, etc.) for production use.
