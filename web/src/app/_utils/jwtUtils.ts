import { SignJWT, jwtVerify, type JWTPayload } from 'jose';

export interface AccessTokenPayload extends JWTPayload {
  userId: string;
  roles: string[];
}

export interface RefreshTokenPayload extends JWTPayload {
  userId: string;
}

export const generateAccessToken = async (userId: string, roles: string[], accessSecretKey: string): Promise<string> => {
  const encoded = new TextEncoder().encode(accessSecretKey);
  
  return new SignJWT({ userId, roles })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('1h')
    .sign(encoded);
};

export const generateRefreshToken = async (userId: string, refreshSecretKey: string): Promise<string> => {
  const encoded = new TextEncoder().encode(refreshSecretKey);

  return new SignJWT({ userId })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(encoded);
};

export const verifyAccessToken = async (accessToken: string, accessSecretKey: string): Promise<AccessTokenPayload | null> => {
  try {
    const encoded = new TextEncoder().encode(accessSecretKey);
    const { payload } = await jwtVerify(accessToken, encoded);
    return payload as AccessTokenPayload;
  } catch (error) {
    return null;
  }
};

export const verifyRefreshToken = async (refreshToken: string, refreshSecretKey: string): Promise<RefreshTokenPayload | null> => {
  try {
    const encoded = new TextEncoder().encode(refreshSecretKey);
    const { payload } = await jwtVerify(refreshToken, encoded);
    return payload as RefreshTokenPayload;
  } catch (error) {
    return null;
  }
};
