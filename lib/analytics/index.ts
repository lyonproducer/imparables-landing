import { sendGAEvent } from "@next/third-parties/google";

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
  process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ||
  "G-Z3DF0P1ET2";

/**
 * Generic event tracker interfacing with @next/third-parties Google/Firebase Analytics.
 * Guarded against SSR / execution outside browser environment.
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  try {
    if (typeof window !== "undefined") {
      sendGAEvent("event", eventName, params || {});
    }
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[Analytics] Failed to send event:", eventName, error);
    }
  }
}

/**
 * Standard GA4 / Firebase Analytics page_view event.
 */
export function trackPageView(params?: {
  page_title?: string;
  page_location?: string;
  page_path?: string;
  [key: string]: unknown;
}): void {
  trackEvent("page_view", params);
}

/**
 * Track navigation switches between Mundo Imparables and Mundo Nexus.
 */
export function trackWorldSwitch(
  targetWorld: "imparables" | "nexus",
  source: string
): void {
  trackEvent("world_switch", {
    target_world: targetWorld,
    source,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track ticket interest and tier selections in Mundo Nexus.
 */
export function trackTicketClick(
  ticketId: string,
  ticketName: string,
  priceUsd?: number
): void {
  trackEvent("select_item", {
    item_list_id: "nexus_tickets",
    item_list_name: "Nexus Tickets 2026",
    items: [
      {
        item_id: ticketId,
        item_name: ticketName,
        price: priceUsd,
      },
    ],
  });
  trackEvent("click_ticket_reserve", {
    ticket_id: ticketId,
    ticket_name: ticketName,
    price_usd: priceUsd,
  });
}

/**
 * Track interactions with speakers and panelists.
 */
export function trackSpeakerClick(
  speakerId: string,
  speakerName: string
): void {
  trackEvent("select_content", {
    content_type: "speaker",
    item_id: speakerId,
    item_name: speakerName,
  });
}

/**
 * Track interactions with partners and sponsors.
 */
export function trackSponsorClick(
  sponsorId: string,
  sponsorName: string
): void {
  trackEvent("select_content", {
    content_type: "partner_sponsor",
    item_id: sponsorId,
    item_name: sponsorName,
  });
}

/**
 * Track user clicks on agenda topics.
 */
export function trackTopicClick(
  topicId: string,
  topicLabel: string
): void {
  trackEvent("select_content", {
    content_type: "topic",
    item_id: topicId,
    item_name: topicLabel,
  });
}

/**
 * Track corporate sponsorship inquiries.
 */
export function trackSponsorshipInterest(tierName: string): void {
  trackEvent("generate_lead", {
    lead_type: "sponsorship",
    tier_name: tierName,
    event: "Nexus 2026",
  });
}

/**
 * Track outbound contact attempts (WhatsApp, Email, Instagram).
 */
export function trackContactClick(
  channel: "whatsapp" | "email" | "instagram" | "youtube" | "phone",
  destination?: string
): void {
  trackEvent("contact_channel_click", {
    channel,
    destination,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track successful registrations or form submissions.
 */
export function trackRegistrationSuccess(data: {
  ticketType?: string;
  source?: string;
}): void {
  trackEvent("sign_up", {
    method: "web_registration",
    ...data,
  });
}
