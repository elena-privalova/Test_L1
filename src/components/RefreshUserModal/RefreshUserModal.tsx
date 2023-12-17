import {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  MouseEvent,
  useEffect,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconButton,
  InputAdornment,
  Modal
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { AppDispatch, RootState } from '../../pages/Main/types';
import { changeRefreshVisibility } from '../../store/modals/slicesRefreshModal';
import { refreshUser } from '../../store/user';
import { clearUser } from '../../store/user/slicesUser';
import { RefreshUser } from '../../store/user/types';
import { validateEmail } from '../../utils/validateEmail';
import { validatePassword } from '../../utils/validatePassword';
import WarningAlert from '../Error/WarningAlert';
import {
  StyledButton,
  StyledForm,
  StyledLoader,
  StyledTextField,
  StyledTypography
} from '../AuthModal/styles';

import './refreshUser.css';

const RefreshUserModal = () => {
  const { isRefreshVisible } = useSelector((state: RootState) => state.refreshModal);
  const {
    isUserLoading,
    userError
  } = useSelector((state: RootState) => state.user);
  const { authUser } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();

  const handleClose = () => {
    dispatch(changeRefreshVisibility({ isRefreshVisible: false }));
    dispatch(clearUser());
  };

  const initialRefreshUser: RefreshUser = {
    email: authUser.email,
    password: '',
    firstName: authUser.firstName,
    lastName: authUser.lastName,
    file: null
  };

  const [newUser, setRefreshUser] = useState(initialRefreshUser);

  const [isShow, setShowPassword] = useState(false);
  const [isCorrectEmail, setCorrectEmail] = useState(true);
  const [isCorrectPassword, setCorrectPassword] = useState(true);

  const handleClickShowPassword = () => {
    setShowPassword((isShow) => !isShow);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleChangeUserInfo = (event: ChangeEvent<HTMLInputElement>) => {
    setRefreshUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null) {
      setRefreshUser({ ...newUser, [event.target.name]: event.target.files[0] });
    }
  };

  const handleBlurEmail = (event: FocusEvent<HTMLInputElement>) => {
    setCorrectEmail(validateEmail(event.target.value));
  };

  const handleBlurPassword = (event: FocusEvent<HTMLInputElement>) => {
    setCorrectPassword(validatePassword(event.target.value));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(refreshUser({
      id: authUser.id,
      refreshUser: newUser
    }));
  };

  useEffect(() => {
    if (!isRefreshVisible) {
      setRefreshUser(initialRefreshUser);
      setCorrectEmail(true);
      setCorrectPassword(true);
    }
  }, [isRefreshVisible]);

  const isDisable = !isCorrectEmail
  || !isCorrectPassword
  || newUser.password === '';

  return (
    <Modal
      open={isRefreshVisible}
      onClose={handleClose}
    >
      <>
        <StyledForm className="refresh-form" onSubmit={handleSubmit}>
          {isUserLoading && (
            <StyledLoader className="refresh-form__loader" color="inherit" />
          )}
          {!isUserLoading && userError === '' && (
            <>
              <StyledTypography>ABOUT ME</StyledTypography>
              <StyledTextField
                name="firstName"
                variant="outlined"
                label="First name"
                value={newUser.firstName ?? ''}
                onChange={handleChangeUserInfo}
              />
              <StyledTextField
                name="lastName"
                variant="outlined"
                label="Last name"
                value={newUser.lastName ?? ''}
                onChange={handleChangeUserInfo}
              />
              <StyledTextField
                name="email"
                variant="outlined"
                label="Email"
                value={newUser.email ?? ''}
                required
                onBlur={handleBlurEmail}
                onChange={handleChangeUserInfo}
                error={!isCorrectEmail}
                helperText={!isCorrectEmail ? 'Email must be correct' : ''}
              />
              <StyledTextField
                name="password"
                variant="outlined"
                label="Password"
                type={isShow ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {isShow ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                value={newUser.password ?? ''}
                required
                onBlur={handleBlurPassword}
                onChange={handleChangeUserInfo}
                error={!isCorrectPassword}
                helperText={!isCorrectPassword ? '8 symbols, letters in both cases, numbers' : ''}
              />
              <label className="news-form__file-group">
                <input
                  name="file"
                  type="file"
                  onChange={handleChangeFile}
                />
                <span className="file-group__text">Change avatar</span>
                {newUser.file != null && (
                  <span className="file-group__file-name">{newUser.file.name}</span>
                )}
              </label>
              <StyledButton
                variant="contained"
                type="submit"
                disabled={isDisable}
              >
                REFRESH
              </StyledButton>
            </>
          )}
        </StyledForm>
        {userError !== '' && (
          <div className="modal__alert">
            <WarningAlert text="Некорректно введенные данные" type="error" />
          </div>
        )}
      </>
    </Modal>
  );
};

export default RefreshUserModal;

