# Environment Variables Setup

## Required Configuration

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your Web3Auth credentials from the dashboard:

### Web3Auth Settings

Get these from your Web3Auth Dashboard:

- **VITE_WEB3AUTH_CLIENT_ID**: Your project's unique identifier
- **VITE_WEB3AUTH_CLIENT_SECRET**: Secret key for authentication
- **VITE_WEB3AUTH_JWKS_ENDPOINT**: JWKS endpoint URL for JWT signing
- **VITE_WEB3AUTH_ENVIRONMENT**: Set to `devnet` for testing or `mainnet` for production

### WalletConnect Settings

Get your Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/):

- **VITE_WALLETCONNECT_PROJECT_ID**: Replace `demo_excelschool_project` with your actual project ID

## Important Notes

⚠️ **Devnet Limitations**:
- Limited to 1,000 users
- Periodic key rotations may lead to lost wallets
- Devnet accounts won't migrate to Mainnet
- Switch to Mainnet for production use

🔒 **Security**:
- Never commit `.env` file to git (already in .gitignore)
- Keep your Client Secret secure
- Use different credentials for development and production

## Usage in Code

Access environment variables using `import.meta.env`:

```typescript
const clientId = import.meta.env.VITE_WEB3AUTH_CLIENT_ID
const environment = import.meta.env.VITE_WEB3AUTH_ENVIRONMENT
```
