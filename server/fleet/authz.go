package fleet

const (
	// ActionRead refers to reading an entity.
	ActionRead = "read"
	// ActionList refers to listing an entity.
	ActionList = "list"
	// ActionWrite refers to writing (CRUD operations) an entity.
	ActionWrite = "write"

	//
	// User specific actions
	//

	// ActionWriteRole is a write to a user's global roles and teams.
	//
	// While the Write action allows setting the role on creation of a user, the
	// ActionWriteRole action is required to modify an existing user's password.
	ActionWriteRole = "write_role"
	// ActionChangePassword is the permission to change a user's password.
	//
	// While the Write action allows setting the password on creation of a user, the
	// ActionChangePassword action is required to modify an existing user's password.
	ActionChangePassword = "change_password"

	//
	// Query specific actions
	//

	// ActionRun is the action for running a live query.
	ActionRun = "run"
	// ActionRunNew is the action for running a new live query.
	ActionRunNew = "run_new"

	//
	// MDM-specific actions
	//

	// ActionMDMCommand is the action for executing an MDM command
	ActionMDMCommand = "mdm_command"
)
