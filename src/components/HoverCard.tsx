import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {Button} from "@/components/ui/button";
import {LinkedInLogoIcon} from "@radix-ui/react-icons";

export function HoverCards() {
    return (<>
            <HoverCard>
                <HoverCardTrigger asChild>
                    <Button variant="link">Quinten Vercruysse</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold"></h4>
                            <p className="text-sm">
                                Nice you found me! I&apos;m Quinten Vercruysse, a student who loves to code and
                                play.
                            </p>
                            <div className="flex items-center pt-2">
                                <LinkedInLogoIcon className="mr-2 h-4 w-4 opacity-70"/>{" "}
                                <span className="text-xs text-muted-foreground">
        pst my LinkedIn : <a href="https://www.linkedin.com/in/quinten-vercruysse/"> quinten-vercruysse</a>
      </span>
                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </>
    );
}