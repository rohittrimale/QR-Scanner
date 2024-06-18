/**
 * v0 by Vercel.
 * @see https://v0.dev/t/TL3xkTjN8hp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

export default function QRContent() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Data Store Overview</CardTitle>
        <CardDescription>
          A secure and scalable data storage solution for your business.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-start gap-1">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Total Records
            </span>
            <span className="text-2xl font-bold">2.3M</span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Daily Active Users
            </span>
            <span className="text-2xl font-bold">12,345</span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Storage Capacity
            </span>
            <span className="text-2xl font-bold">5TB</span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Uptime
            </span>
            <span className="text-2xl font-bold">99.99%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
