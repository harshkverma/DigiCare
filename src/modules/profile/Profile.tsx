import { useContext, useState } from "react";
import "./Profile.scss";
import { ProfileProps } from "./interface";
import { digicareConfig } from "../../assets/constants/config";
import { capitalize } from "@mui/material";
import { EUserRole, IPatient } from "../avatarPopOverContent/interface";
import { IDoctorHistory } from "../doctorHistory/interface";
import { ContextProps, ILoginUser } from "../../context/interface";
import { updateProfileDetails } from "../../api/patient";
import { AppContext } from "../../context/app";
import { updateDoctorProfileDetails } from "../../api/doctor";
import DigiCareAutocomplete from "../common/components/DigicareAutoComplete";
import { DigicareAutoCompleteDataProps } from "../common/interface/DigicareAutoComplete";
import { DigicareSnackbar } from "../common/components/DigiSnackbar";

export const DigiProfile = ({ user, isEdit }: ProfileProps) => {
  const { getUser } = useContext(AppContext) as ContextProps;
  const [editMode, setEditMode] = useState(false);
  const [name] = useState(user?.name);
  const [profileUser, setProfileuser] = useState<
    IPatient | IDoctorHistory | ILoginUser
  >(user);
  const [profilePicture] = useState(user?.profile_pic);
  const [apiErrorMessage, setApiErrorMessage] = useState<string>();

  const handleSave = () => {
    setEditMode(false);
    if (user.role === EUserRole.patient)
      updateProfileDetails(user?.user_name, profileUser)
        .then(() => {
          getUser();
        })
        .catch((e) => {
          setApiErrorMessage(e.response.data.message.toString());
        });
    else if (user.role === EUserRole.doctor)
      updateDoctorProfileDetails(user?.user_name, profileUser)
        .then(() => {
          getUser();
        })
        .catch((e) => {
          setApiErrorMessage(e.response.data.message.toString());
        });
  };

  const handleChange = (e: any, userKey: string) => {
    setProfileuser((prev) => {
      return { ...prev, [userKey]: e.target.value };
    });
  };

  const handleClose = () => {
    setApiErrorMessage(undefined);
  };

  return (
    <div className={!editMode ? 'profile-card' : 'profile-card editenable'}>
      <div>
        <img
          src={process.env.REACT_APP_FRONTEND_HOST + profilePicture}
          alt={name}
          className="profile-avatar"
        />
      </div>
      <div className="profile-details">
        <h1 className="profile-name">{capitalize(name)}</h1>

        {Object.keys(profileUser).map((userKey) => {
          {
            if (digicareConfig.userKeysToShow.includes(userKey)) {
              const userKeyValue =
                profileUser[
                  userKey as keyof (IPatient | IDoctorHistory | ILoginUser)
                ];
              return (
                <div className="profile-field">
                  <span className="field-label">
                    {capitalize(userKey.split("_").join(" "))}:
                  </span>
                  {editMode &&
                  digicareConfig.editableUserKeys.includes(userKey) ? (
                    Array.isArray(userKeyValue) ? (
                      <DigiCareAutocomplete
                        data={digicareConfig[userKey]}
                        handleAutocompleteChange={(
                          v: DigicareAutoCompleteDataProps[],
                        ) => {
                          const values = v.map((val) => {
                            return val.value;
                          });
                          handleChange({ target: { value: values } }, userKey);
                        }}
                        isMultiSelect={true}
                        value={userKeyValue as Array<string>}
                      />
                    ) : (
                      <input
                        type="text"
                        value={userKeyValue}
                        onChange={(e) => handleChange(e, userKey)}
                        className="field-input"
                      />
                    )
                  ) : (
                    <span className="field-value">
                      {Array.isArray(userKeyValue)
                        ? userKeyValue.join(", ")
                        : capitalize(userKeyValue)}
                    </span>
                  )}
                </div>
              );
            } else return <></>;
          }
        })}
      </div>
      {isEdit && (
        <div className="profile-buttons">
          {editMode ? (
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button
              className="edit-button"
              onClick={() => setEditMode(!editMode)}
            >
              Edit Profile
            </button>
          )}
        </div>
      )}
      <DigicareSnackbar
        message={apiErrorMessage}
        autoHideDuration={12000}
        color="error"
        variant="filled"
        handleClose={handleClose}
      />
    </div>
  );
};
