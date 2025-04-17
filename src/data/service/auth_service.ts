export default class AuthService {
    static async login(username: string, password: string) {
        const response = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        });
    
        if (!response.ok) {
        throw new Error("Login failed");
        }
    
        const data = await response.json();
        return data;
    }
    
    static async logout() {
        const response = await fetch("/api/logout", {
        method: "POST",
        });
    
        if (!response.ok) {
        throw new Error("Logout failed");
        }
    
        return true;
    }
}