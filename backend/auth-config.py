from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from keycloak import KeycloakOpenID

app = FastAPI()
keycloak_openid = KeycloakOpenID(server_url="KEYCLOAK_SERVER_URL",
                                 client_id="CLIENT_ID",
                                 realm_name="REALM_NAME",
                                 client_secret_key="CLIENT_SECRET")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(...)
    try:
        return keycloak_openid.decode_token(token, ...)
    except Exception as e:
        raise credentials_exception
