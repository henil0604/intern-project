import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function RegisterTabs() {
	return (
		<Tabs defaultValue="person" className="w-[400px]">
			<TabsList className="grid w-full grid-cols-2">
				<TabsTrigger value="person">Person</TabsTrigger>
				<TabsTrigger value="recruiter">Recruiter</TabsTrigger>
			</TabsList>
			<TabsContent value="person">
				<Card>
					<CardHeader>
						<CardTitle>Person</CardTitle>
						<CardDescription>
							Make changes to your account here. Click save when
							you're done.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-2">
						<div className="space-y-1">
							<Label htmlFor="name">Name</Label>
							<Input id="name" defaultValue="Pedro Duarte" />
						</div>
						<div className="space-y-1">
							<Label htmlFor="age">Age</Label>
							<Input id="age" defaultValue="25" />
						</div>
						<div className="space-y-1">
							<Label htmlFor="role">Role</Label>
							<Input id="role" defaultValue="Developer" />
						</div>
						<div className="space-y-1">
							<Label htmlFor="location">Location</Label>
							<Input id="location" defaultValue="Ghana" />
						</div>
						<div className="space-y-1">
							<Label htmlFor="skills">Skills</Label>
							<Input
								id="skills"
								defaultValue="React, Next.js, TailwindCSS"
							/>
						</div>
						<div className="space-y-1">
							<Label htmlFor="education">Education</Label>
							<Input
								id="education"
								defaultValue="University of Ghana"
							/>
						</div>
						<div className="space-y-1">
							<Label htmlFor="qualification">Qualification</Label>
							<Input
								id="qualification"
								defaultValue="Bachelor of Science"
							/>
						</div>
						<div className="space-y-1">
							<Label htmlFor="achievements">Achievements</Label>
							<Input
								id="achievements"
								defaultValue="10 Projects Completed"
							/>
						</div>
						<div className="space-y-1">
							<Label htmlFor="types">Types</Label>
							<Input id="types" defaultValue="Remote" />
						</div>
						<div className="space-y-1">
							<Label htmlFor="past-jobs">Pass Jobs</Label>
							<Input id="past-jobs" defaultValue="Dev-Ops" />
						</div>
						<div className="space-y-1">
							<Label htmlFor="past-jobs">Pass Jobs</Label>
							<Input id="past-jobs" defaultValue="Dev-Ops" />
						</div>
					</CardContent>
					<CardFooter>
						<Button>Save changes</Button>
					</CardFooter>
				</Card>
			</TabsContent>
			<TabsContent value="password">
				<Card>
					<CardHeader>
						<CardTitle>Password</CardTitle>
						<CardDescription>
							Change your password here. After saving, you'll be
							logged out.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-2">
						<div className="space-y-1">
							<Label htmlFor="current">Current password</Label>
							<Input id="current" type="password" />
						</div>
						<div className="space-y-1">
							<Label htmlFor="new">New password</Label>
							<Input id="new" type="password" />
						</div>
					</CardContent>
					<CardFooter>
						<Button>Save password</Button>
					</CardFooter>
				</Card>
			</TabsContent>
		</Tabs>
	);
}
