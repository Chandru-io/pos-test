import { useState } from "react";
import { permission as initialPermissions } from "../../../data/PermissionArray";

const Permissions = () => {
  // Initialize state with the permissions structure
  const [permissions, setPermissions] = useState(initialPermissions);
  const [roleData, setRoleData] = useState({
    role_name: "",
    description: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      ...roleData,
      permissions,
    };

    console.log("Submitted Data:", formData); // Log the merged object
  };

  const handleRoleChange = (e) => {
    const { name, value } = e.target;
    setRoleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle individual permission checkbox change (for create, edit, delete)
  const handlePermissionChange = (
    sectionKey,
    childKey,
    permissionType,
    isChecked
  ) => {
    setPermissions((prevState) => {
      const updatedPermissions = { ...prevState };
      const currentChild =
        updatedPermissions.permissions[sectionKey].children[childKey];

      // Update the specific permission (create, edit, delete)
      updatedPermissions.permissions[sectionKey].children[childKey] = {
        ...currentChild,
        [permissionType]: isChecked,
      };

      // If 'delete' is checked, ensure all permissions (view, create, edit) are checked
      if (permissionType === "delete" && isChecked) {
        updatedPermissions.permissions[sectionKey].children[childKey] = {
          ...currentChild,
          view: true,
          create: true,
          edit: true,
          delete: true,
        };
      }

      // If 'create' is checked, ensure 'view' and 'edit' are also checked
      if (permissionType === "create" && isChecked) {
        updatedPermissions.permissions[sectionKey].children[childKey] = {
          ...currentChild,
          view: true,
          edit: true,
          create: true,
        };
      }
      if (permissionType === "edit" && isChecked) {
        updatedPermissions.permissions[sectionKey].children[childKey] = {
          ...currentChild,
          view: true,
          edit: true,
        };
      }

      return updatedPermissions;
    });
  };

  // Handle "Select All" checkbox for a section
  const handleSelectAllChange = (sectionKey, isChecked) => {
    setPermissions((prevState) => {
      const updatedPermissions = { ...prevState };
      const section = updatedPermissions.permissions[sectionKey];

      Object.keys(section.children).forEach((childKey) => {
        updatedPermissions.permissions[sectionKey].children[childKey] = {
          view: isChecked,
          create: isChecked,
          edit: isChecked,
          delete: isChecked,
        };
      });

      return updatedPermissions;
    });
  };

  // Render each section and its child permissions
  const renderSection = (sectionKey) => {
    const section = permissions.permissions[sectionKey];

    // Check if all permissions in this section are selected
    const allSelected = Object.values(section.children).every(
      (childPermissions) =>
        childPermissions.view &&
        childPermissions.create &&
        childPermissions.edit &&
        childPermissions.delete
    );

    return (
      <div key={sectionKey} className="border-b pb-6 mb-6 grid grid-cols-3">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            {sectionKey.replace(/_/g, " ")}
          </h2>

          {/* Select All checkbox for the section */}
          <div className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              checked={allSelected}
              onChange={(e) =>
                handleSelectAllChange(sectionKey, e.target.checked)
              }
              className="form-checkbox rounded h-5 w-5 "
            />
            <span className="text-sm text-gray-500">Select All</span>
          </div>
        </div>
        <div className="space-y-4">
          {Object.keys(section.children).map((childKey) => {
            const childPermissions = section.children[childKey];

            return (
              <div key={childKey} className="border-t pt-4 grid grid-cols-2">
                <h3 className="text-xl font-medium text-gray-600 mb-3">
                  {childKey.replace(/_/g, " ")}
                </h3>
                <div className="flex items-center gap-6">
                  {/* Main checkbox for 'view' */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={childPermissions.view}
                      onChange={(e) =>
                        handlePermissionChange(
                          sectionKey,
                          childKey,
                          "view",
                          e.target.checked
                        )
                      }
                      className="form-checkbox rounded h-5 w-5 "
                    />
                    <span className="text-sm text-gray-500">View</span>
                  </div>

                  {/* Always render the other permissions */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={childPermissions.create}
                      onChange={(e) =>
                        handlePermissionChange(
                          sectionKey,
                          childKey,
                          "create",
                          e.target.checked
                        )
                      }
                      className="form-checkbox rounded h-5 w-5 "
                    />
                    <span className="text-sm text-gray-500">Create</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={childPermissions.edit}
                      onChange={(e) =>
                        handlePermissionChange(
                          sectionKey,
                          childKey,
                          "edit",
                          e.target.checked
                        )
                      }
                      className="form-checkbox rounded h-5 w-5 "
                    />
                    <span className="text-sm text-gray-500">Edit</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={childPermissions.delete}
                      onChange={(e) =>
                        handlePermissionChange(
                          sectionKey,
                          childKey,
                          "delete",
                          e.target.checked
                        )
                      }
                      className="form-checkbox rounded h-5 w-5 "
                    />
                    <span className="text-sm text-gray-500">Delete</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 p-6 border rounded-lg shadow-lg bg-white     "
      >
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-start">
            <label className="font-semibold">Role</label>
            <input
              type="text"
              name="role_name"
              placeholder="Role"
              value={roleData.role_name}
              onChange={handleRoleChange}
              className="rounded"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="font-semibold">Description</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={roleData.description}
              onChange={handleRoleChange}
              className="rounded"
            />
          </div>
        </div>
        {Object.keys(permissions.permissions).map((sectionKey) =>
          renderSection(sectionKey)
        )}
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-2 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Permissions;
