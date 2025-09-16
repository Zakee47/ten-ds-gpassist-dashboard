import { Home, User, Settings, Hospital, Phone, ChevronDown } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, useSidebar } from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
const navigationItems = [{
  title: "Home",
  url: "/",
  icon: Home
}, {
  title: "Patient Portal",
  icon: Hospital,
  subItems: [{
    title: "Medical Review",
    url: "/patient-portal/medical-review"
  }, {
    title: "Admin Request",
    url: "/patient-portal/admin-request"
  }]
}, {
  title: "Clinician Portal",
  url: "/clinician-portal",
  icon: Phone
}, {
  title: "Profile",
  url: "/profile",
  icon: User
}, {
  title: "Settings",
  url: "/settings",
  icon: Settings
}];
export function AppSidebar() {
  const {
    state
  } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path: string) => currentPath === path;
  const isPatientPortalActive = currentPath.startsWith('/patient-portal');
  return <Sidebar className="border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-base font-semibold">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map(item => <SidebarMenuItem key={item.title}>
                  {item.subItems ? <Collapsible defaultOpen={isPatientPortalActive}>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton size="lg" className="flex items-center gap-3 text-base">
                          <item.icon className="h-9 w-5 " />
                          <span className="text-base">{item.title}</span>
                          <ChevronDown className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.subItems.map(subItem => <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild isActive={isActive(subItem.url)}>
                                <NavLink to={subItem.url} className="text-base">
                                  {subItem.title}
                                </NavLink>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>)}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible> : <SidebarMenuButton asChild isActive={isActive(item.url)} size="lg">
                      <NavLink to={item.url} className="flex items-center gap-3 text-base">
                        <item.icon className="h-9 w-5" />
                        <span className="text-base">{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>}
                </SidebarMenuItem>)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <div className="flex items-center justify-center">
          <img src="/lovable-uploads/2873cff1-4cf2-49a1-bda8-48aa827ba056.png" alt="NHS" className={`transition-all duration-200 ${state === "collapsed" ? "h-8 w-auto" : "h-16 w-auto max-w-full"}`} />
        </div>
      </SidebarFooter>
    </Sidebar>;
}