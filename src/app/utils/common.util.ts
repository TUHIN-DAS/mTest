export class CommonUtil
{
   static getRelativeTime(datetime:string)
   {
      let duration = new Date().getTime() - new Date(datetime).getTime();

      let inSeconds = duration/1000;
      
      if(inSeconds < 60)
        return Math.floor(inSeconds) + " seconds ago";
      else if(inSeconds > 60 && inSeconds < 3600)
        return Math.floor(inSeconds/60) + " minutes ago";
      else if(inSeconds > 3600 && inSeconds < (3600 * 24))
        return Math.floor(inSeconds/3600) + " hours ago";
      else if(inSeconds > (3600 * 24) && inSeconds < (3600 * 24 * 7))
        return Math.floor(inSeconds/(3600 * 24)) + " days ago";
      else if(inSeconds > (3600 * 24 * 7) && inSeconds < (3600 * 24 * 30))
        return Math.floor(inSeconds/(3600 * 24 * 7)) + " weeks ago";
      else
        return Math.floor(inSeconds/(3600 * 24 * 30)) + " months ago";
   }
}