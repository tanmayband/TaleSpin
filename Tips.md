To start mongodb/brew/mongodb-community now and restart at login:

`brew services start mongodb/brew/mongodb-community`

Or, if you don't want/need a background service you can just run:

`mongod --config /opt/homebrew/etc/mongod.conf`

---

To run MongoDB (i.e. the mongod process) as a macOS service, run:

`brew services start mongodb-community@5.0`

To stop a mongod running as a macOS service, use the following command as needed:

`brew services stop mongodb-community@5.0`