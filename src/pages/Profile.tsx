
import { useState } from "react";
import Navbar from "@/components/Layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import TopicSelector from "@/components/Preferences/TopicSelector";
import FormatSelector from "@/components/Preferences/FormatSelector";

export default function Profile() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully.",
      });
    }, 1000);
  };
  
  const handleTopicsUpdate = (selectedTopics: string[]) => {
    toast({
      title: "Topics updated",
      description: `You selected ${selectedTopics.length} topics.`,
    });
  };
  
  const handleFormatUpdate = () => {
    // Format update is handled in the component
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>
        
        <Tabs defaultValue="account" className="space-y-8">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="topics">News Topics</TabsTrigger>
            <TabsTrigger value="format">Format Preferences</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>
                  Update your account settings and personal information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="Alex Johnson" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="alex@example.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Input id="bio" placeholder="A short bio about yourself" />
                  </div>
                  
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Saving..." : "Save Changes"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="topics">
            <Card>
              <CardHeader>
                <CardTitle>News Topic Preferences</CardTitle>
                <CardDescription>
                  Select the news topics you're interested in following.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TopicSelector onSelectionComplete={handleTopicsUpdate} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="format">
            <Card>
              <CardHeader>
                <CardTitle>Format Preferences</CardTitle>
                <CardDescription>
                  Choose how you prefer to consume your news content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FormatSelector onComplete={handleFormatUpdate} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Control when and how you receive notifications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Daily News Digest</h3>
                      <p className="text-sm text-gray-500">Receive a daily summary of top news</p>
                    </div>
                    <input type="checkbox" defaultChecked className="toggle toggle-primary" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Breaking News Alerts</h3>
                      <p className="text-sm text-gray-500">Get notified about major breaking news</p>
                    </div>
                    <input type="checkbox" defaultChecked className="toggle toggle-primary" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Topic Updates</h3>
                      <p className="text-sm text-gray-500">Notifications about your selected topics</p>
                    </div>
                    <input type="checkbox" defaultChecked className="toggle toggle-primary" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Email Notifications</h3>
                      <p className="text-sm text-gray-500">Receive updates via email</p>
                    </div>
                    <input type="checkbox" className="toggle toggle-primary" />
                  </div>
                </div>
                
                <Button className="mt-6">Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
