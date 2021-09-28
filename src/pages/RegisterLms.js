import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
// import { RegisterForm } from '../components/authentication/register';
import RegisterForm from '../components/authentication/register/RegisterFormLms';
import AuthSocial from '../components/authentication/AuthSocial';
import { mockImgCover } from '../utils/mockImages';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  },
  backgroundImage: `url(${mockImgCover('uiii_bg')})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

const FormStyle = styled('div')(({ theme }) => ({
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(5, 5),
  borderRadius: '16px',
  backgroundColor: 'white'
}));

// ----------------------------------------------------------------------

export default function RegisterLms() {
  return (
    <RootStyle title="Register | UIII LMS">
      <AuthLayout>
        <Typography sx={{ color: 'white' }}>Already have an account? &nbsp;</Typography>
        <Link
          underline="none"
          variant="subtitle2"
          component={RouterLink}
          to="/login"
          sx={{ color: '#E3A130' }}
        >
          Login
        </Link>
      </AuthLayout>

      {/* <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            UIII Learning Management System
          </Typography>
          <img alt="register" src="/static/illustrations/illustration_register.png" />
        </SectionStyle>
      </MHidden> */}

      <Container>
        <ContentStyle>
          <FormStyle>
            <Typography variant="h3" sx={{ px: 0, mt: 0, mb: 5, color: '#003B5C' }}>
              UIII Learning Management System
            </Typography>
            <Box sx={{ mb: 5 }}>
              <Typography variant="h4" gutterBottom sx={{ color: '#003B5C' }}>
                Create new account.
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>
								Free forever. No credit card needed.
							</Typography> */}
            </Box>

            {/* <AuthSocial /> */}

            <RegisterForm />

            {/* <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
							By registering, I agree to Minimal&nbsp;
							<Link underline="always" sx={{ color: 'text.primary' }}>
								Terms of Service
							</Link>
							&nbsp;and&nbsp;
							<Link underline="always" sx={{ color: 'text.primary' }}>
								Privacy Policy
							</Link>
							.
						</Typography> */}

            <MHidden width="smUp">
              <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
                Already have an account?&nbsp;
                <Link to="/login" component={RouterLink}>
                  Login
                </Link>
              </Typography>
            </MHidden>
          </FormStyle>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}