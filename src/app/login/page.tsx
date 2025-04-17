"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-frenzi">
      <h1 className="text-2xl font-semibold mb-6">LOGIN</h1>

      <Card className="w-full max-w-sm shadow-md">
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="email" className="mb-1 block">
              Email
            </Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>

          <div>
            <Label htmlFor="password" className="mb-1 block">
              Password
            </Label>

            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-2 flex items-center"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <Eye className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
            </div>
          </div>

          <Button
            className="w-full bg-purple-blue"
            onClick={() => {
              router.push("/driver_table"); // Redirect to driver table page on login
            }}
          >
            Login
          </Button>

          <p className="text-sm text-center ">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-primary underline">
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>

      <div className="mt-6 text-sm text-center text-white">
        <p>
          Need help?{" "}
          <a
            href="mailto:support@example.com"
            className="text-purple-blue underline"
          >
            Contact us
          </a>
        </p>
        <p className="mt-2 text-xs">FRENZI PASSENGER APP V1.0.0</p>
      </div>
    </div>
  );
}
