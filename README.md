Drawing Place
=============

Client
------

Drawing and composition application.
Separate playback thing (eventually).
Run create-react-app setup within a docker container with bind-mounted volume.

Server
------

Store drawings to disk and descriptions to database.
Run golang Docker environment with pilu/fresh and a bind-mounted volume to rebuild on change.
Database and image directory are local for now.
